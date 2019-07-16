const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider("depend taste baby vote decorate legal rich bomb roast unveil shiver wide", "https://rinkeby.infura.io/v3/41b414dbfcba4b99b77b4dc33d219274")
      },
      network_id: '4',
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
};