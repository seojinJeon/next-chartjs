import Barchart from "./components/Barchart";
import Doughnutchart from "./components/DoughnutChart";
import PolarAreachart from "./components/PolarAreaChart";
import Piechart from "./components/pieChart";

export default function Home() {
  return (
    <div className="container">
      Chart js
      <div>
        <h3>Bar Chart</h3>
        <Barchart />
      </div>
      <div>
        <h3>Pie Chart</h3>
        <Piechart />
      </div>
      <div>
        <h3>Doughnut Chart</h3>
        <Doughnutchart />
      </div>
      <div>
        <h3>PolarArea Chart</h3>
        <PolarAreachart />
      </div>
    </div>
  );
}
