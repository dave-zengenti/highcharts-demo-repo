import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { LineChart } from "./pages/linechart";
import { BarChart } from "./pages/barchart";
// import Home from "./pages/Home";
// import About from "./pages/About";

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/liney-line-line-charty-chart-chart">Line chart</Link>
          </li>
          <li>
            <Link to="/bar-bar-bar-chart">Bar chart</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/liney-line-line-charty-chart-chart" element={<LineChart />} />
        <Route path="/bar-bar-bar-chart" element={<BarChart />} />
      </Routes>
    </div>
  );
};

export default App;
