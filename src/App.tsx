import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2025", conservative: 5.0, moderate: 5.0, aggressive: 5.0 },
  { year: "2026", conservative: 6.0, moderate: 7.0, aggressive: 6.75 },
  { year: "2027", conservative: 7.2, moderate: 10.0, aggressive: 9.11 },
  { year: "2028", conservative: 8.64, moderate: 15.0, aggressive: 12.29 },
  { year: "2029", conservative: 10.37, moderate: 22.0, aggressive: 16.59 },
  { year: "2030", conservative: 12.44, moderate: 30.0, aggressive: 22.39 },
  { year: "2031", conservative: 14.93, moderate: 38.0, aggressive: 30.22 },
  { year: "2032", conservative: 17.91, moderate: 45.0, aggressive: 40.8 },
  { year: "2033", conservative: 21.49, moderate: 55.0, aggressive: 55.08 },
  { year: "2034", conservative: 25.79, moderate: 65.0, aggressive: 74.36 },
  { year: "2035", conservative: 30.95, moderate: 80.0, aggressive: 100.39 },
];

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>偉康科技 FIDO + 零信任 10 年市場戰略</h1>
      <h2>📈 三種市場成長情境預估（億元）</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="conservative" stroke="#8884d8" name="保守預估" />
          <Line type="monotone" dataKey="moderate" stroke="#82ca9d" name="中性預估" />
          <Line type="monotone" dataKey="aggressive" stroke="#ff7300" name="樂觀預估" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
