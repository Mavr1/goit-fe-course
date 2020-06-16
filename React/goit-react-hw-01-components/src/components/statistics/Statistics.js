import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  width: max-content;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  width: 100px;
  height: 30px;
  justify-content: space-between;
  text-align: center;
`;

const getColor = () => {
  const randomColor = Math.round(Math.random() * 15000000).toString(16);
  const bgColor = { backgroundColor: `#${randomColor}` };
  return bgColor;
};

const Statistics = ({ title, stats }) => (
  <Section>
    {title && <h2 className="title">{title}</h2>}

    <Ul>
      {stats.map((item) => (
        <Li key={item.id} style={getColor()}>
          <span className="label"> {item.label}</span>
          <span className="percentage"> {item.percentage}%</span>
        </Li>
      ))}
    </Ul>
  </Section>
);

Statistics.propTypes = {
  title: T.string,
  stats: T.arrayOf(
    T.shape({ label: T.string.isRequired, percentage: T.number.isRequired })
  ).isRequired,
};

export default Statistics;
