const { ethers } = require("ethers");
require("dotenv").config();
const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.PROXY_v1;

// import the ABI of contractV1
const { abi } = require("./artifacts/contracts/contractV3.sol/contractV3.json");

// create a provider and signer to connect to the network
const provider = new ethers.providers.JsonRpcProvider(SEPOLIA_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// create an instance of the upgradeable contract
const contractV1Instance = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

const main = async () => {
  let b = await contractV1Instance.getValue();
  console.log(parseInt(b));
  const tx = await contractV1Instance.decreaseValue(53);
  await tx.wait();
  let a = await contractV1Instance.getValue();
  console.log(parseInt(a));
};
main();
