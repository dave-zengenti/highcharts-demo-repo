import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import { useState } from "react";

// Initialize the accessibility module
if (typeof HighchartsAccessibility === "function") {
  HighchartsAccessibility(Highcharts);
}

export const BarChart = () => {
  const [showDataLabels, setShowDataLabels] = useState(true);

  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Readability Score",
    },
    legend: {
      enabled: true,
    },
    xAxis: {
      categories: [
        "Moderately difficult",
        "Fairly difficult",
        "Average",
        "Fairly easy",
        "Easy",
        "Very easy",
      ],
    },
    yAxis: {
      title: {
        text: "Occurrences",
      },
    },
    plotOptions: {
      bar: {
        color: "#A687FE", // Set the bar fill color to orange
      },
    },
    series: [
      {
        name: "Occurrences",
        data: [2, 8, 14, 9, 2, 1],
        dataLabels: {
          enabled: showDataLabels,
        },
      },
    ],
    accessibility: {
      description: "Readability score based on occurrences of different reading levels.",
      pointDescriptionFormatter: function (point: { category: string; y: number }) {
        return `${point.category} to read. ${point.y} occurrences`;
      },
    },
    credits: {
      enabled: false,
    },
  };

  const handleCheckboxChange = () => {
    setShowDataLabels(!showDataLabels);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={showDataLabels} onChange={handleCheckboxChange} />
        Show Data Labels
      </label>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
