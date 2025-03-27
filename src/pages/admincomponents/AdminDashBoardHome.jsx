import React from "react";
import Card from "react-bootstrap/Card";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashBoardHome = () => {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [12000, 19000, 3000, 5000, 22000],
        borderColor: "#fff",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        pointBackgroundColor: "#fff",
        pointBorderColor: "#000",
      },
    ],
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Profit This Year",
        data: [50, 75, 100, 120, 180],
        backgroundColor: [
          "#333",
          "#666",
          "#999",
          "#bbb",
          "#ddd",
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Action", "RPG", "FPS", "Sports"],
    datasets: [
      {
        data: [300, 150, 100, 200],
        backgroundColor: ["#111", "#444", "#777", "#aaa"],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="admin-dashboard w-100">
      <h1 className="text-center mt-5">Admin Panel</h1>

      <div className="chart-container">
        <Card className="custom-card">
          <Card.Body>
            <Card.Title>Profit Chart</Card.Title>
            <Bar data={barData} />
          </Card.Body>
        </Card>

        <Card className="custom-card">
          <Card.Body>
            <Card.Title>Product Sold</Card.Title>
            <Pie data={pieData} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashBoardHome;
