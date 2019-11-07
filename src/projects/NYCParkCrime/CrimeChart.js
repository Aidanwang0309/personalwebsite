import React from 'react';
import { Bar } from 'react-chartjs-2';
import { relative } from 'path';

const ChartTotalByQuarterData = {
  labels: ['Quarter3_2016', 'Quarter4_2016', 'Quarter1_2017', 'Quarter2_2017'],
  datasets: [
    {
      type: 'bar',
      label: 'Murder',
      data: [6, 2, 0, 2],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255,99,132,1)'
    },
    {
      type: 'bar',
      label: 'Rape',
      data: [8, 7, 3, 7],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 0.2)'
    },
    {
      type: 'bar',
      label: 'Robbery',
      data: [146, 107, 64, 106],
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 0.2)'
    },
    {
      type: 'bar',
      label: 'Rape',
      data: [85, 27, 18, 82],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 0.2)'
    },
    {
      type: 'bar',
      label: 'FelonyAssault',
      data: [85, 27, 18, 82],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 0.2)'
    },
    {
      type: 'bar',
      label: 'Burglary',
      data: [8, 9, 5, 3],
      backgroundColor: 'rgba(175, 92, 192, 0.2)',
      borderColor: 'rgba(175, 92, 192, 0.2)'
    },
    {
      type: 'bar',
      label: 'GrandLarceny',
      data: [242, 90, 43, 143],
      backgroundColor: 'rgba(175, 132, 92, 0.2)',
      borderColor: 'rgba(175, 132, 92, 0.2)'
    },
    {
      type: 'bar',
      label: 'GrandLarcenyMotor',
      data: [0, 1, 0, 3],
      backgroundColor: 'rgba(75, 32, 92, 0.2)',
      borderColor: 'rgba(75, 32, 92, 0.2)'
    },
    {
      type: 'line',
      label: 'AvgTemperature',
      data: [78, 64, 37, 63],
      borderWidth: 2,
      fill: false,
      borderColor: 'rgba(0, 0, 0, 0.8)'
    }
  ]
};

const CrimeChart = () => {
  return (
    <div className="chart" style={{ position: 'relative' }}>
      <Bar
        data={ChartTotalByQuarterData}
        width={'100%'}
        height={'100%'}
        options={{
          scales: {
            xAxes: [
              {
                stacked: true
              }
            ],
            yAxes: [
              {
                stacked: true
              }
            ]
          },
          responsive: true,
          title: {
            display: true,
            text: 'Number of Crimes Form Q3/2016 to Q2/2017'
          },
          tooltips: {
            mode: 'index',
            intersect: true
          }
        }}
      />
    </div>
  );
};

export default CrimeChart;
