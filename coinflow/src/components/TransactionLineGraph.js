import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, TimeScale, Tooltip, Legend, CategoryScale } from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(LineElement, PointElement, LinearScale, TimeScale, Tooltip, Legend, CategoryScale);

function spreadRecurring(amount, startDate, endDate, freq) {
  // freq: 'daily' or 'monthly'
  const result = {};
  const start = new Date(startDate);
  const end = new Date(endDate);
  let current = new Date(start);
  if (freq === 'daily') {
    while (current <= end) {
      const key = current.toISOString().slice(0, 10);
      result[key] = (result[key] || 0) + amount;
      current.setDate(current.getDate() + 1);
    }
  } else if (freq === 'monthly') {
    // Spread evenly across all days in the month
    while (current <= end) {
      const month = current.getMonth();
      const year = current.getFullYear();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      for (let d = 1; d <= daysInMonth; d++) {
        const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        result[key] = (result[key] || 0) + amount / daysInMonth;
      }
      current.setMonth(current.getMonth() + 1);
      current.setDate(1);
    }
  }
  return result;
}

const TransactionLineGraph = ({ transactions, recurringTransactions }) => {
  // Aggregate all transactions by date
  const dailyTotals = {};
  transactions.forEach(txn => {
    const date = txn.date || new Date().toISOString().slice(0, 10);
    // Use sign: income adds, expense subtracts
    const amt = txn.type === 'income' ? txn.amount : -Math.abs(txn.amount);
    dailyTotals[date] = (dailyTotals[date] || 0) + amt;
  });
  // Add recurring transactions
  if (recurringTransactions) {
    recurringTransactions.forEach(rt => {
      const spread = spreadRecurring(rt.amount, rt.startDate, rt.endDate, rt.frequency);
      Object.entries(spread).forEach(([date, amt]) => {
        dailyTotals[date] = (dailyTotals[date] || 0) + amt;
      });
    });
  }
  // Sort dates
  const dates = Object.keys(dailyTotals).sort();
  let runningTotal = 0;
  const dataPoints = dates.map(date => {
    runningTotal += dailyTotals[date];
    return { x: date, y: runningTotal };
  });

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Balance Over Time',
        data: dataPoints.map(point => ({ x: point.x, y: point.y })),
        fill: false,
        borderColor: '#36a2eb',
        backgroundColor: '#36a2eb',
        tension: 0.2,
        pointRadius: 3,
        showLine: true,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
      tooltip: { mode: 'index', intersect: false },
    },
    parsing: false,
    scales: {
      x: {
        type: 'time',
        time: { unit: 'day', tooltipFormat: 'yyyy-MM-dd' },
        title: { display: true, text: 'Date' },
      },
      y: {
        title: { display: true, text: 'Balance ($)' },
        beginAtZero: true,
      },
    },
  };
  return (
    <div style={{ maxWidth: 700, margin: '2rem auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #e0e0e0', padding: '1.5rem' }}>
      <h3 style={{ textAlign: 'center', marginBottom: 16 }}>Spending & Balance Over Time</h3>
      <Line data={data} options={options} height={320} />
    </div>
  );
};

export default TransactionLineGraph;
