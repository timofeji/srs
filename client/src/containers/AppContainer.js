import React, { Component } from "react";
import SimpleRedistributionScheme from "../contracts/SimpleRedistributionScheme.json";
import getWeb3 from "../getWeb3";


import "./App.css";

import bgImg from '../assets/bg.jpg';

class App extends Component {
  state = { totalRaised: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleRedistributionScheme.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleRedistributionScheme.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };
  runExample = async () => {
    const { web3, accounts, contract } = this.state;
    const weiRaisedValue = await contract.methods.totalWeiRaised().call();
    const totalRaised = web3.utils.fromWei(weiRaisedValue, "ether");

    this.setState({ totalFund: totalRaised });
  };

  OnContribute = async () => {
    const { web3, accounts, contract } = this.state;
    const gasPrice = await web3.eth.getGasPrice();

    console.log(gasPrice);

    await contract.methods.contribute().send({
      from: accounts[0],
      gas: gasPrice,
      value: gasPrice * 1.1,
    });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <img className="App-Landing" src={bgImg} alt="BigCo Inc. logo" />
        <p className="App-Wallet">connected wallet: {this.state.accounts[0]}</p>
        <div className="App-header">
          <div className="container">
            <h1>Simple Redistribution Scheme</h1>
            <p>
              SRS is a simple ethereum-based UBI, based on a monthly
              redistribution cycle that splits funds equally amongst all
              contributors; or as we like to call it: a reverse ponzi scheme
              that benefits the poor and disadvantages the rich.
            </p>

            <br></br>
            <div className="row">
              <div className="col-md-6 App-Cycle-Info">
                <h2>Current Cycle:</h2>
                <p>Total Fund: {this.state.totalFund} Ξ</p>
                <p>Min. Contribution: {this.state.individualBenefit} Ξ</p>
                <p>Individual Benefit: {this.state.individualBenefit} Ξ</p>
                <button onClick={this.OnContribute} className="btn btn-primary">
                  Contribute
                </button>
              </div>

              <div className="col-md-6 App-Cycle-Info">
                <h2>Total Contributions:</h2>
                <p>Total Fund: {this.state.totalFund} Ξ</p>
                <p>Min. Contribution: {this.state.individualBenefit} Ξ</p>
                <p>Individual Benefit: {this.state.individualBenefit} Ξ</p>
                <button onClick={this.OnContribute} className="btn btn-primary">
                  Contribute
                </button>
              </div>
            </div>
          </div>

          <div className="clickdown">
            <a
              className="fa fa-angle-down fa-3x"
              href="https://www.instagram.com/timofeji/"
            ></a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
