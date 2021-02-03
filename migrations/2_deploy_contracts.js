var SimpleRedistributionScheme = artifacts.require("./SimpleRedistributionScheme.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleRedistributionScheme);
};
