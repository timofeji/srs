import React, { Component } from "react";
import SimpleRedistributionScheme from "../contracts/SimpleRedistributionScheme.json";
import getWeb3 from "../getWeb3";

import "./Leaderboard.css";

class Leaderboard extends Component {
  render() {
    return (
      <div className="Leaderboard">
        <div className="container">
          <h1>Leaderboards:</h1>
          <p>
            SRS is a simple ethereum based UBI, based on a simple redistribution
            scheme that splits funds equally amongst all contributors; or as we
            like to call it: a reverse ponzi scheme that benefits the poor and
            disadvantages the rich.
          </p>

          <button onClick={this.OnContribute} className="btn btn-primary">
            Contribute
          </button>
          <br></br>
          <a href="ethereum.org">Click Here to read the white paper</a>
          <h2>Currently Raised</h2>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
