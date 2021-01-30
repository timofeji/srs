// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;


struct Contributor{

}

contract SimpleRedistributionScheme {
  uint storedData;

  uint public minimumContribution;
  uint public totalRaised;

  mapping(address => Contributor) public contributors;


  function contribute() payable{
    require(msg.value > minimumContribution);

    contributors[msg.sender] = true;

    totalRaised += msg.value;
  }

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
