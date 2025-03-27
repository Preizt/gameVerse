import React from 'react';
import Card from 'react-bootstrap/Card';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const AdminDashBoardHome = () => {

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [12000, 19000, 3000, 5000, 22000],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Profit This Year',
        data: [50, 75, 100, 120, 180],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff'],
      },
    ],
  };

  const pieData = {
    labels: ['Action', 'RPG', 'FPS', 'Sports'],
    datasets: [
      {
        data: [300, 150, 100, 200],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <>
      <h1 className='text-center mt-5'>Admin Panel</h1>

      <div className='row gap-4 d-flex ms-5 justify-content-evenly mt-5'>
        {/* <Card style={{ width: '18rem' }} className='p-3 shadow'>
          <Card.Body>
            <Card.Title>Sales Trends</Card.Title>
            <Line data={lineData} />
          </Card.Body>
        </Card> */}

        <Card style={{ width: '40rem' }} className='p-3 shadow ms-5'>
          <Card.Body>
            <Card.Title>Profit Chart</Card.Title>
            <Bar data={barData} />
          </Card.Body>
        </Card>

        <Card style={{ width: '30rem' }} className='p-3 shadow'>
          <Card.Body>
            <Card.Title>Product Sold</Card.Title>
            <Pie data={pieData} />
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default AdminDashBoardHome;
