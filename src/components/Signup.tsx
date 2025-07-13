import React, { useState, useEffect, useCallback } from "react";
import { firestore } from "./Firebase";
import { 
  getFirestore, 
  getDocs, 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  limit, 
  where,
  onSnapshot,
  Unsubscribe
} from "firebase/firestore";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function Signup() {
  const { address, isConnected } = useAccount();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [data, setData] = useState<any>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [checkingUser, setCheckingUser] = useState(true);

  // Enhanced user existence check with retry logic
  const checkUserExists = useCallback(async (retryCount = 0) => {
    if (!address) {
      setCheckingUser(false);
      return;
    }
    
    setCheckingUser(true);
    
    try {
      console.log(`Checking if user exists (attempt ${retryCount + 1}):`, address);
      
      const usersCollection = collection(firestore, 'users');
      const q = query(usersCollection, where('wallet', '==', address));
      const querySnapshot = await getDocs(q);
      
      const exists = !querySnapshot.empty;
      setUserExists(exists);
      
      console.log("User exists:", exists);
      
      // If user already exists, redirect to chat
      if (exists) {
        console.log("User already exists, redirecting to chat");
        navigate('/chat');
      }
    } catch (error) {
      console.error("Error checking if user exists:", error);
      
      // Retry logic for network issues
      if (retryCount < 3) {
        console.log("Retrying user existence check...");
        setTimeout(() => {
          checkUserExists(retryCount + 1);
        }, 1000 * (retryCount + 1)); // Exponential backoff
        return;
      }
      
      // If all retries failed, assume user doesn't exist to allow registration
      setUserExists(false);
    } finally {
      setCheckingUser(false);
    }
  }, [address, navigate]);

  // Check if user already exists when component mounts or address changes
  useEffect(() => {
    checkUserExists();
  }, [checkUserExists]);

  // Redirect to home if wallet is disconnected
  useEffect(() => {
    if (!isConnected) {
      console.log("Wallet disconnected, redirecting to home");
      navigate('/');
    }
  }, [isConnected, navigate]);

  // Enhanced data fetching with error handling
  const fetchData = useCallback(async () => {
    try {
      const usersCollection = collection(firestore, 'users');
      const q = query(usersCollection, orderBy('name'), limit(10));
      const querySnapshot = await getDocs(q);

      const usersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setData({ users: usersData });
      console.log("Fetched user data:", usersData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Don't block the UI if fetching sample data fails
      setData({ users: [] });
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Enhanced registration with better error handling and timeout
  const writeData = useCallback(async () => {
    if (!address || !name.trim()) {
      console.error("Missing required data: address or name");
      return;
    }

    if (userExists) {
      console.log("User already exists, cannot register again");
      return;
    }

    setIsRegistering(true);
    console.log("Starting registration process:", address, name.trim());

    try {
      // Double-check user doesn't exist before writing
      const usersCollection = collection(firestore, 'users');
      const existingUserQuery = query(usersCollection, where('wallet', '==', address));
      const existingUserSnapshot = await getDocs(existingUserQuery);
      
      if (!existingUserSnapshot.empty) {
        console.log("User already exists during registration attempt, redirecting");
        setUserExists(true);
        setIsRegistering(false);
        navigate('/chat');
        return;
      }

      // Set up onSnapshot listener with timeout before adding the document
      let listenerTimeout: number | null = null;
      let registrationCompleted = false;
      
      const unsubscribe: Unsubscribe = onSnapshot(
        query(usersCollection, where('wallet', '==', address)),
        (snapshot) => {
          if (!snapshot.empty && !registrationCompleted) {
            // User has been successfully created
            registrationCompleted = true;
            console.log("User successfully registered, redirecting to chat");
            
            if (listenerTimeout) {
              clearTimeout(listenerTimeout);
            }
            
            unsubscribe(); // Clean up the listener
            navigate('/chat');
          }
        },
        (error) => {
          console.error("Error in registration listener:", error);
          setIsRegistering(false);
          
          if (listenerTimeout) {
            clearTimeout(listenerTimeout);
          }
        }
      );

      // Set a timeout to clean up the listener if something goes wrong
      listenerTimeout = window.setTimeout(() => {
        if (!registrationCompleted) {
          console.log("Registration listener timeout, attempting manual check");
          unsubscribe();
          
          // Manual check if user was actually created
          checkUserExists().then(() => {
            setIsRegistering(false);
          });
        }
      }, 15000); // 15 second timeout

      // Add the new user document
      const docRef = await addDoc(usersCollection, {
        wallet: address,
        name: name.trim(),
        createdAt: new Date(),
        chats: [] // Initialize empty chats array
      });
      
      console.log("Registration document written with ID:", docRef.id);
      
    } catch (error) {
      console.error("Error during registration:", error);
      setIsRegistering(false);
      
      // Show user-friendly error message
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      if (errorMessage.includes('permission') || errorMessage.includes('rules')) {
        alert('Registration failed: Permission denied. Please try again or contact support.');
      } else if (errorMessage.includes('network') || errorMessage.includes('offline')) {
        alert('Registration failed: Network error. Please check your connection and try again.');
      } else {
        alert('Registration failed: ' + errorMessage);
      }
    }
  }, [address, name, userExists, navigate, checkUserExists]);

  // Handle Enter key press in input field
  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isRegistering && !userExists && name.trim()) {
      writeData();
    }
  }, [writeData, isRegistering, userExists, name]);

  // Enhanced input validation
  const isValidName = useCallback((inputName: string) => {
    const trimmedName = inputName.trim();
    return trimmedName.length >= 2 && trimmedName.length <= 50 && /^[a-zA-Z0-9\s._-]+$/.test(trimmedName);
  }, []);

  // Show loading state while checking if user exists
  if (checkingUser) {
    return (
      <div className="centered-signup">
        <div className="welcomeText">
          <h1>Checking registration status...</h1>
          <h2>Please wait</h2>
        </div>
        <div style={{ marginTop: '20px', color: '#ccc' }}>
          <p>Wallet: {address}</p>
        </div>
      </div>
    );
  }

  // Show message if user already exists
  if (userExists) {
    return (
      <div className="centered-signup">
        <div className="welcomeText">
          <h1>Already Registered</h1>
          <h2>You're already signed up! Redirecting to chat...</h2>
        </div>
        <p>Wallet Address: {address}</p>
      </div>
    );
  }

  // Show error if no wallet is connected
  if (!isConnected || !address) {
    return (
      <div className="centered-signup">
        <div className="welcomeText">
          <h1>Wallet Not Connected</h1>
          <h2>Please connect your wallet to continue</h2>
        </div>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '12px 24px',
            backgroundColor: '#50b458',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="centered-signup">
      <div className="welcomeText">
        <h1>Welcome to Chat 3.0</h1>
        <h2>One last step to start chatting</h2>
      </div>
      
      <div style={{ marginBottom: '20px', color: '#ccc' }}>
        <p>Wallet: {address.slice(0, 6)}...{address.slice(-4)}</p>
      </div>

      <div className="signupBox">
        <input
          type="text"
          placeholder="Enter your display name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isRegistering}
          maxLength={50}
          minLength={2}
          autoComplete="off"
          autoFocus
        />
        
        <button 
          onClick={writeData}
          disabled={isRegistering || !name.trim() || !isValidName(name)}
          title={!isValidName(name) && name.trim() ? 'Name must be 2-50 characters and contain only letters, numbers, spaces, dots, hyphens, and underscores' : ''}
        >
          {isRegistering ? "Registering..." : "Register"}
        </button>
      </div>
      
      {/* Validation feedback */}
      {name.trim() && !isValidName(name) && (
        <p style={{ color: '#ff4444', fontSize: '14px', marginTop: '10px', textAlign: 'center' }}>
          Name must be 2-50 characters and contain only letters, numbers, spaces, dots, hyphens, and underscores
        </p>
      )}
      
      {isRegistering && (
        <p style={{ color: '#50b458', marginTop: '15px', textAlign: 'center' }}>
          Creating your account, please wait...
        </p>
      )}
      
      {/* Retry button if there was an error */}
      {!isRegistering && !userExists && data?.users && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button
            onClick={() => checkUserExists()}
            style={{
              padding: '8px 16px',
              backgroundColor: 'transparent',
              color: '#50b458',
              border: '1px solid #50b458',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Retry Check
          </button>
        </div>
      )}
    </div>
  );
}

export default Signup;