const { ethers } = require("ethers");

const privateKey =
  "0xe11dfd3f6a929f1e6e3374f19c15aa89d83d800cc5ce71ef5b385db78820d26e";

async function sign() {
  // The Signer; it does not need to be connected to a Provider to sign
  const signer = new ethers.Wallet(privateKey);

  console.log("Signer Address:", signer.address);
  // '0x0A489345F9E9bc5254E18dd14fA7ECfDB2cE5f21'

  // Our message NOTE:
  const message = "Hello World";

  // The raw signature; 65 bytes
  const rawSig = await signer.signMessage(message);
  console.log("Raw Signature:", rawSig);
  // '0xa617d0558818c7a479d5063987981b59d6e619332ef52249be8243572ef1086807e381afe644d9bb56b213f6e08374c893db308ac1a5ae2bf8b33bcddcb0f76a1b'

  // Converting it to a Signature object provides more
  // flexibility, such as using it as a struct
  //   const sigObj = Signature.from(rawSig);
  //   console.log("sigObj", sigObj);

  // If you need to recover the signer address from the signature
  const recoveredAddress = ethers.verifyMessage(message, rawSig);
  console.log("Recovered Address:", recoveredAddress);
}

sign();

// _______

// Replace with your private key
// const privateKey =
//   "0xe11dfd3f6a929f1e6e3374f19c15aa89d83d800cc5ce71ef5b385db78820d26e";
// const wallet = new ethers.Wallet(privateKey);

// async function signMessage(tokenAmount, recipient) {
//   const message = ethers.solidityPackedKeccak256(
//     // Array of types: declares the data types in the message.
//     ["uint256", "address"],
//     // Array of values: actual values of the parameters to be hashed.
//     [tokenAmount, recipient]
//   );
//   const signature = await wallet.signMessage(ethers.toBeArray(message));

//   console.log("Message Hash:", message);
//   console.log("Signature:", signature);
//   console.log("Signer Address:", wallet.address);

//   return { message, signature, signer: wallet.address };
// }

// // Example usage
// const tokenAmount = 100;
// const recipient = "0x2dC8Bc53ECf1A59188e4c7fAB0c7bB57339F85e7";

// // signMessage(tokenAmount, recipient).then(({ message, signature, signer }) => {
// //   console.log("Message Hash:", message);
// //   console.log("Signature:", signature);
// //   console.log("Signer Address:", signer);
// // });
