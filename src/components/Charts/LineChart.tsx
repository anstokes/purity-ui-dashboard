import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

import { lineChartData, lineChartOptions } from "@variables/charts";

type TLineChartState = {
  chartData: [],
  chartOptions: {},
};


export default class LineChart extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: lineChartData,
      chartOptions: lineChartOptions,
    });
  }

  render() {
    const { chartData, chartOptions } = this.state as TLineChartState;

    return (
      <ReactApexChart
        height="100%"
        options={chartOptions}
        series={chartData}
        type="area"
        width="100%"
      />
    );
  }
}
