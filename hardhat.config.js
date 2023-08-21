require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async(taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// 0x76d903dB2508796d5704d948b22bbdff9a2aDc39
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.4",
    networks: {
        goerli: {
            url: "https://eth-goerli.g.alchemy.com/v2/h4eV53wSlfig59ZBx9M1F5M6EALbMJ1C",
            accounts: ["abaa36a8452c8ef6f298254abde6812e5a4270392f1e188f696a7fd28c1cd851"],
        }
    }
};