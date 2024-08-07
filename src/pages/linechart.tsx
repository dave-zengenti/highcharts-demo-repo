import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import data from "../data.json";

// Extend Highcharts type definitions to include pointDescriptionFormatter property
declare module "highcharts" {
  interface AccessibilityOptions {
    pointDescriptionFormatter?: (point: { category: number; y: number }) => string;
  }
}

// Initialize the accessibility module
if (typeof HighchartsAccessibility === "function") {
  HighchartsAccessibility(Highcharts);
}

export const LineChart = () => {
  const accessibilityData = data.accessibility.map((point: { x: string; y: number }) => [
    new Date(point.x).getTime(),
    point.y,
  ]);

  const chartOptions: Highcharts.Options = {
    title: {
      text: "Accessibility Score Over Time",
    },
    subtitle: {
      text: "Are you getting better or worse? Let's find out!",
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "Lighthouse Score",
      },
    },
    series: [
      {
        type: "spline",
        name: "Accessibility Score",
        data: accessibilityData,
        zones: [
          {
            value: 98,
            color: "red",
          },
        ],
      },
    ],
    accessibility: {
      description: "Accessibility score over time.",
      pointDescriptionFormatter: function (point: { category: number; y: number }) {
        const date = Highcharts.dateFormat("%B %Y", point.category);
        return `Accessibility score: ${point.y} in ${date}.`;
      },
    },
    credits: {
      enabled: false,
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};
