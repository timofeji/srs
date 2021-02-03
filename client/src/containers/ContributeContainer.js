import React, { Component } from "react";
import "./Contribute.css";

import Highcharts from 'highcharts';

class Contribute extends Component {
  componentDidUpdate = async () => {
    Highcharts.chart("chart", {
      chart: {
        plotBackgroundColor: "transparent",
        backgroundColor: "transparent",
        margin: [0, 0, 0, 0],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0,

        plotBorderWidth: 0,
        plotShadow: false,
      },
      title: {
        text: "Current Cycle",
        align: "center",
        verticalAlign: "middle",
        y: 0,
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
            style: {
              fontWeight: "bold",
            },
          },
          borderColor: "transparent",
          size: "100%",
          startAngle: -90,
          endAngle: 90,
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          type: "pie",
          name: "Individual share",
          innerSize: "80%",
          data: [
            {
              name: "Rest of the Fund",
              y: 7.61,
              dataLabels: {
                enabled: false,
              },
            },
            ["Individual Benefit", 3.42],
          ],
        },
      ],
    });
  };

  render() {
    return (
      <div className="container">
        <div id="chart"></div>
      </div>
    );
  }
}

export default Contribute;
