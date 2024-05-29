const { ethers } = require("ethers");

const privateKey =
  "0xe11dfd3f6a929f1e6e3374f19c15aa89d83d800cc5ce71ef5b385db78820d26e";

async function sign() {
  // The Signer; it does not need to be connected to a Provider to sign
  const signer = new ethers.Wallet(privateKey);

  console.log("Signer Address:", signer.address);

  const tokenAmount = 100;
  const recipient = "0x2dC8Bc53ECf1A59188e4c7fAB0c7bB57339F85e7";

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

  return { rawSig, message };
}

sign().then(({ rawSig, message }) => {
  console.log("Raw Signature:", rawSig);
  console.log("Message Hash (Hex):", message);
});
