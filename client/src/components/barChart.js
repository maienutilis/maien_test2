import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// create graph component
const Graph = ({terms})=>{
  return (
    <BarChart
      width={500}
      height={300}
      data={terms}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="number" fill="#8884d8" />
    </BarChart>
  );
}

export default Graph;