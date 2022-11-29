import { useEffect } from 'react';
import './App.css';
const { ethers } = require("ethers");

function App() {
  const walletAddress = "0x365c6fbee3e37375f183c9a995e86fc45aff6c52"; //contract wallet

  const writeContract = async (abi) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();
    const walletContract = new ethers.Contract(walletAddress, abi, signer);

    // await walletContract.setValue(5);
    // await walletContract.sendEthContract({ value: ethers.utils.parseEther("0.05") })
    await walletContract.sendEthUser("0x21e1cEcC402ccAe685CE5f7a302eac5F0c3B54e2", { value: ethers.utils.parseEther("0.05") })
  }

  useEffect(() => {
    const abi = [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "accountBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "contractBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getValue",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "sendEthContract",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "sendEthUser",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_num",
            "type": "uint256"
          }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]

    writeContract(abi)
  }, [])


  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
