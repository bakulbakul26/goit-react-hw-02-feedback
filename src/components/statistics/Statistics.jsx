import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.wrapper}>
    <p className={css.data}>Good: {good}</p>
    <p className={css.data}>Neutral: {neutral}</p>
    <p className={css.data}>Bad: {bad}</p>
    <p className={css.data}>Total: {total}</p>
    <p className={css.data}>Positive Feedback: {positivePercentage}%</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
