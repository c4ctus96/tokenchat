import React, { useState, useEffect } from "react";
import { firestore } from "./Firebase";
import { getFirestore, getDocs, collection, addDoc, query, orderBy, limit,  } from "firebase/firestore";
import { useAccount } from "wagmi";
import "../styles.css";

function Signup() {
  const { address } = useAccount();
  const [name, setName] = useState("");
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    const usersCollection = collection(firestore, 'users');
    const q = query(usersCollection, orderBy('name'), limit(10)); // Adjust as needed
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
    console.log("Writing data:", address, name);

    try {
      await addDoc(collection(firestore, 'users'), {
        wallet: address,
        name: name
      });
      console.log("Data written successfully");
      fetchData(); // Fetch the updated data
    } catch (error) {
      console.error("Error writing data:", error);
    }
  };

  return (
    <div className="centered-div">
      <div className="title">
        <h3>Register User</h3>
      </div>
      <p>Wallet Address: {address}</p>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={writeData}>Register</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Signup;
