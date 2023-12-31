const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0x68eD5D4d9BC6f6099F27c289975d7bD27f993b4b";

async function main() {
  const contractV3 = await ethers.getContractFactory("contractV3");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, contractV3);

  console.log(upgraded.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
