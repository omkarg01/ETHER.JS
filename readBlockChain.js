// import provider from ethers and assign inufra ID
const { ethers } = require("ethers");
const providers = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/406a48f998df4e23a1597a11d0cd9b75")

// querryFrom ethereum blockChain
async function  querryFromBlockchain() {
    // get recent block number
    const blockNumber = await providers.getBlockNumber();
    console.log(blockNumber)    

    // get balance of any random address
    const balance = await providers.getBalance("0xe0C4AB8887Bf79BAa58faE36eBB27d726eeCE26E");
    console.log(balance)

    // display it in ethers
    const etherBalance = ethers.utils.formatEther(balance);
    console.log(etherBalance)
}

querryFromBlockchain()
