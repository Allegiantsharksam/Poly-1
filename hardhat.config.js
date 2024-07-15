require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.4",
    networks: {
        sepolia: {
            url: "https://rpc.sepolia.org",
            accounts: [`0x${process.env.PRIVATE_KEY}`]
        }
    }
};
