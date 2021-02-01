// SPDX-License-Identifier: MIT
pragma solidity ^0.7.4;


contract SimpleRedistributionScheme {

  uint public minimumContribution;
  uint public totalWeiRaised = 100;

  mapping(address => bool) public contributors;


  constructor(){

  }

  function contribute() payable public {
    require(msg.value > minimumContribution);

    contributors[msg.sender] = true;

    totalWeiRaised += msg.value;
  }

  function releaseFunds() private {

  }

  function getTotalFund() public view returns (uint) {
    return totalWeiRaised;
  }
}
