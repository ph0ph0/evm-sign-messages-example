const { ethers } = require("ethers");

async function sendTransaction(tokenAmount, recipient) {

  const contractABI = [
      // TBD, import from a separate file 
  ]  
  const contractAddress = // TBD, import from .env  

  const provider = new ethers.providers.JsonRpcProvider("<FILECOIN RPC URL, import from .env>");
  const signer = new ethers.Wallet(privateKey, provider);

  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  // Examples
  // const tokenAmount = 100;
  // const recipient = "0x2dC8Bc53ECf1A59188e4c7fAB0c7bB57339F85e7";

  const tx = await contract.mint(rawSig, tokenAmount, recipient);
  await tx.wait();

  console.log("Transaction Hash:", tx.hash);
}
