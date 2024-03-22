import React, { Component } from "react";
import Chart from "react-apexcharts";

import { barChartData, barChartOptions } from "@variables/charts";

import Card from "../Card/Card";

type TBarChartState = {
  chartData: [],
  chartOptions: {},
};

export default class BarChart extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: barChartData,
      chartOptions: barChartOptions,
    });
  }

  render() {
    const { chartData, chartOptions } = this.state as TBarChartState;

    return (
      <Card
        bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
        height={{ sm: "200px" }}
        position="relative"
        py="1rem"
        width="100%"
      >
        <Chart
          height="100%"
          options={chartOptions}
          series={chartData}
          type="bar"
          width="100%"
        />
      </Card>
    );
  }
}
