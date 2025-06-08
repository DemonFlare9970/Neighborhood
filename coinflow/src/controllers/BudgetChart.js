import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function getColor(index) {
  // A palette of visually distinct colors
  const palette = [
    '#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff', '#ff9f30',
    '#e57373', '#81c784', '#ba68c8', '#ffd54f', '#4dd0e1', '#f06292',
    '#7986cb', '#a1887f', '#90a4ae', '#dce775', '#ffb74d', '#aed581'
  ];
  return palette[index % palette.length];
}

function BudgetChart ({ categories, income }) {
    const hasData = income > 0 && categories && categories.length > 0 && categories.some(cat => cat.percent > 0);
    const data = {
        labels: categories.map(cat => `${cat.name} (${cat.percent}%)`),
        datasets: [
            {
                data: categories.map(cat => (income * cat.percent) / 100),
                backgroundColor: categories.map((_, idx) => getColor(idx)),
                borderColor: '#fff',
                borderWidth: 2,
                hoverOffset: 12,
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                  boxWidth: 20,
                  padding: 18,
                  font: { size: 14 }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        return `${label}: $${value.toFixed(2)}`;
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    };
    return (
      <div style={{ height: 320 }}>
        {hasData ? (
          <Pie data={data} options={options} />
        ) : (
          <div style={{textAlign:'center',color:'#888',paddingTop:100,fontSize:18}}>
            Enter your income and categories to see a breakdown chart.
          </div>
        )}
      </div>
    );
}

export default BudgetChart;