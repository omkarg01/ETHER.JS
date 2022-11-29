// get the contract address on which the SC has deployed
// 0x365c6fbee3e37375f183c9a995e86fc45aff6c52
// import provider from ethers and assign inufra ID
const { ethers } = require("ethers");
const providers = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/406a48f998df4e23a1597a11d0cd9b75")

// get wallet address
const walletAddress = "0x365c6fbee3e37375f183c9a995e86fc45aff6c52";

// get ABI of deployed SC
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

// perform read and write opeartions
const querryFromBlockchain = async () => {
    const walletContract = new ethers.Contract(walletAddress, abi, providers);

    // const name = await walletContract.name();
    // console.log(name)

    // const value = await walletContract.getValue();
    // console.log(String(value))

    const contractBalance = await walletContract.contractBalance();
    const etherContractBalance = ethers.utils.formatEther(contractBalance)
    console.log(etherContractBalance)

    // const accountBalance = await walletContract.accountBalance("0x078fdAAd093275cAd0Ac2751ab777126AFefcdBB");
    // const etherAccountBalance = ethers.utils.formatEther(accountBalance)
    // console.log(etherAccountBalance)

}

querryFromBlockchain()