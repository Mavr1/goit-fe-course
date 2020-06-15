import React from 'react';
import '../statistics/Statistics.css';

const getColor = () => {
  const randomColor = Math.round(Math.random() * 15000000).toString(16);
  const bgColor = { backgroundColor: `#${randomColor}` };
  return bgColor;
};

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <ul className="stat-list">
      {stats.map((item) => (
        <li className="item" key={item.id} style={getColor()}>
          <span className="label"> {item.label}</span>
          <span className="percentage"> {item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;