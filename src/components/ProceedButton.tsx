import React, { useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAccount } from 'wagmi';
import { SlLogin } from "react-icons/sl";
import { firestore } from './Firebase'; 
import { useNavigate } from 'react-router-dom';

function ProceedButton() {
  const { address } = useAccount();
  const [userExists, setUserExists] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const checkUser = async (walletAddress: string) => {
    const usersCollection = collection(firestore, 'users');
    const q = query(usersCollection, where('wallet', '==', walletAddress));

    try {
      const querySnapshot = await getDocs(q);
      const userFound = !querySnapshot.empty;
      console.log("User found:", userFound);
      setUserExists(userFound);

      if (userFound) {
        navigate('/chat'); // Redirect to Chat page if user is found
      } else {
        navigate('/signup'); // Redirect to Signup page if user is not found
      }
    } catch (error) {
      console.error('Error checking user:', error);
      setUserExists(false);
      navigate('/signup'); // Redirect to Signup page on error
    }
  };

  return (
    <div>
      <button
        className="proceedButton"
        onClick={() => {
          if (address) {
            checkUser(address);
          } else {
            console.error("Address is undefined");
          }
        }}
      >
        <SlLogin size={28} />
        <span>Proceed</span>
      </button>
      {userExists !== null && (
        <p>{userExists ? 'User exists' : 'User does not exist'}</p>
      )}
    </div>
  );
}

export default ProceedButton;
