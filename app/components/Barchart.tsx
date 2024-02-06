"use client";

import { useRef, useEffect, ElementRef } from "react";
import { Chart } from "chart.js/auto";

export default function Barchart() {
  const chartRef = useRef<ElementRef<"canvas">>(null);

  useEffect(() => {
    if (chartRef.current) {
      const context = chartRef.current.getContext("2d");
      if (!context) return;

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: ["John", "Jane", "Doe", "Emily", "Jack", "David", "Ruby"],
          datasets: [
            {
              label: "Info",
              data: [34, 64, 23, 45, 67, 24, 64],
              backgroundColor: [
                "rgb(255, 99, 132, 0.2)",
                "rgb(255, 159, 64, 0.2)",
                "rgb(255, 205, 86, 0.2)",
                "rgb(75, 192, 192, 0.2)",
                "rgb(54, 162, 235, 0.2)",
                "rgb(153, 102, 255, 0.2)",
                "rgb(201, 203, 207, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
              ],
              borderWidth: 1,
              // borderRadius: 10,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "category",
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      return () => {
        newChart.destroy();
      };
    }
  }, []);

  return (
    <div style={{ position: "relative", width: "90vw", height: "80vh" }}>
      <canvas ref={chartRef} />
    </div>
  );
}
