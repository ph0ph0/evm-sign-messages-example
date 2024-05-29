const { ethers } = require("ethers");

const privateKey =
  "0xcf038c8a292755cdd249ca744a1d8767339d91e271ad0cc78a3bc3b3b70d0f14";

async function sign(tokenAmount, recipient) {
  const signer = new ethers.Wallet(privateKey);

  console.log("Signer Address:", signer.address);

  // Examples
  // const tokenAmount = 100;
  // const recipient = "0x2dC8Bc53ECf1A59188e4c7fAB0c7bB57339F85e7";

  const message = ethers.solidityPackedKeccak256(
    ["uint256", "address"],
    [tokenAmount, recipient]
  );

  const rawSig = await signer.signMessage(ethers.getBytes(message));
  console.log("Raw Signature:", rawSig);

  const recoveredAddress = ethers.verifyMessage(
    ethers.getBytes(message),
    rawSig
  );
  console.log("Recovered Address:", recoveredAddress);

  return { rawSig, tokenAmount, recipient };
}

sign().then(({ rawSig, message }) => {
  console.log("Raw Signature:", rawSig);
  console.log("Message Hash (Hex):", message);
});

{
    "tokenAmount": 100,
    "recipient": 0x2dC8Bc53ECf1A59188e4c7fAB0c7bB57339F85e7
}