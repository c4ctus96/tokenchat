import React, { useState, useEffect } from "react";
import { ref, set, onValue } from "firebase/database";
import { useAccount } from "wagmi";
import "../styles.css";
import EthProfilePic from "./EthProfilePic";

function ChatSidebar() {
    const { address } = useAccount();
    let pfp = "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-dngglm1r.png";
    if (address) {
        pfp = `https://effigy.im/a/${address}.png`;
    }

    return (
        <div className="ChatSidebar">
            <div className="profilePicture">
                {/*<img className="profilePicture" src={pfp} alt="Profile Picture"></img>*/}

                {address && <EthProfilePic eth={address} />}
            </div>
        </div>
    );
}

export default ChatSidebar;
