import "./App.css";
import { ethers } from "ethers";
import { useState, useEffect } from "react";

function App() {
  const [account, setAccount] = useState("");

  const initConnection = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } else {
      console.log("Please install MetaMask");
    }
  };

  useEffect(() => {
    initConnection();
  }, []);

  return (
    <div className="page">
      <div className="header">
        <img className="artIcon" src={require(`./assets/images/s-logo.png`)} />
        <p>11/15</p>
        {account == "" ? (
          <button className="button" onClick={initConnection}>
            Connect
          </button>
        ) : (
          <p>{account}</p>
        )}
      </div>
    </div>
  );
}

export default App;
