import React from 'react';
import '../statistics/Statistics.css';

const getColor = () => {
  const randomColor = Math.round(Math.random() * 15000000).toString(16);
  const bgColor = { backgroundColor: `#${randomColor}` };
  return bgColor;
};

const Statistics = ({ title, stats }) => (
  <section class="statistics">
    {title && <h2 class="title">{title}</h2>}

    <ul class="stat-list">
      {stats.map((item) => (
        <li class="item" key={item.id} style={getColor()}>
          <span class="label"> {item.label}</span>
          <span class="percentage"> {item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
