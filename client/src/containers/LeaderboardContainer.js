import React, { Component } from "react";
import SimpleRedistributionScheme from "../contracts/SimpleRedistributionScheme.json";
import getWeb3 from "../getWeb3";

import "./Leaderboard.css";

import Contribution from "../components/contribution";


class Leaderboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="Leaderboard">
          <h1>Top Contributors</h1>
          <table class="table">
            <thead>
              <tr>
                <th style={{ width: "5%" }} scope="col">
                  #
                </th>
                <th style={{ width: "5%" }} scope="col">
                  Name
                </th>
                <th style={{ width: "90%" }} scope="col">
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>
                  loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
