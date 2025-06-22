import React, { useState, useEffect } from "react";
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
  const { address } = useAccount();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [data, setData] = useState<any>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [checkingUser, setCheckingUser] = useState(true);

  // Check if user already exists when component mounts or address changes
  useEffect(() => {
    const checkUserExists = async () => {
      if (!address) return;
      
      setCheckingUser(true);
      try {
        const usersCollection = collection(firestore, 'users');
        const q = query(usersCollection, where('wallet', '==', address));
        const querySnapshot = await getDocs(q);
        
        const exists = !querySnapshot.empty;
        setUserExists(exists);
        
        // If user already exists, redirect to chat
        if (exists) {
          console.log("User already exists, redirecting to chat");
          navigate('/chat');
        }
      } catch (error) {
        console.error("Error checking if user exists:", error);
      } finally {
        setCheckingUser(false);
      }
    };

    checkUserExists();
  }, [address, navigate]);

  const fetchData = async () => {
    const usersCollection = collection(firestore, 'users');
    const q = query(usersCollection, orderBy('name'), limit(10));
    const querySnapshot = await getDocs(q);

    const usersData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setData({ users: usersData });
    console.log("Fetched data:", usersData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const writeData = async () => {
    if (!address || !name.trim()) {
      console.error("Missing required data: address or name");
      return;
    }

    if (userExists) {
      console.log("User already exists, cannot register again");
      return;
    }

    setIsRegistering(true);
    console.log("Writing data:", address, name);

    try {
      // Double-check user doesn't exist before writing
      const usersCollection = collection(firestore, 'users');
      const existingUserQuery = query(usersCollection, where('wallet', '==', address));
      const existingUserSnapshot = await getDocs(existingUserQuery);
      
      if (!existingUserSnapshot.empty) {
        console.log("User already exists, cannot register");
        setUserExists(true);
        setIsRegistering(false);
        navigate('/chat');
        return;
      }

      // Set up onSnapshot listener before adding the document
      const unsubscribe: Unsubscribe = onSnapshot(
        query(usersCollection, where('wallet', '==', address)),
        (snapshot) => {
          if (!snapshot.empty) {
            // User has been successfully created
            console.log("User successfully registered, redirecting to chat");
            unsubscribe(); // Clean up the listener
            navigate('/chat');
          }
        },
        (error) => {
          console.error("Error in onSnapshot listener:", error);
          setIsRegistering(false);
        }
      );

      // Add the new user document
      await addDoc(usersCollection, {
        wallet: address,
        name: name.trim()
      });
      
      console.log("Data written successfully");
      
      // Set a timeout to clean up the listener if something goes wrong
      setTimeout(() => {
        unsubscribe();
        if (isRegistering) {
          setIsRegistering(false);
          console.log("Registration timeout, stopped listening");
        }
      }, 10000); // 10 second timeout

    } catch (error) {
      console.error("Error writing data:", error);
      setIsRegistering(false);
    }
  };

  // Handle Enter key press in input field
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isRegistering && !userExists && name.trim()) {
      writeData();
    }
  };

  // Show loading state while checking if user exists
  if (checkingUser) {
    return (
      <div className="centered-signup">
        <div className="welcomeText">
          <h1>Checking registration status...</h1>
          <h2>Please wait</h2>
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

  return (
    <div className="centered-signup">
      <div className="welcomeText">
        <h1>Welcome to Chat 3.0</h1>
        <h2>One last step to start chatting</h2>
      </div>
      <p>Wallet Address: {address}</p>
      <div className="signupBox">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isRegistering}
          maxLength={50} // Add reasonable limit
        />
        <button 
          onClick={writeData}
          disabled={isRegistering || !name.trim()}
        >
          {isRegistering ? "Registering..." : "Register"}
        </button>
      </div>
      
      {isRegistering && (
        <p style={{ color: '#50b458', marginTop: '10px' }}>
          Creating your account, please wait...
        </p>
      )}
    </div>
  );
}

export default Signup;