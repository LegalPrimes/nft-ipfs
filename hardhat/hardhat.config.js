require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const INFURA_HTTP_URL = process.env.INFURA_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.20",
  networks: {
    mumbai: {
      url: INFURA_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};