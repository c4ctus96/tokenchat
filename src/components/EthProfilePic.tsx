import React from "react";

type EthProfilePicProps = {
    eth: string;
};

const EthProfilePic: React.FC<EthProfilePicProps> = ({ eth }) => {
    return (
        <div>
            <img src={`https://effigy.im/a/${eth}.svg`} alt="Profile picture" className="profilePic" />
        </div>
    );
};

export default EthProfilePic;