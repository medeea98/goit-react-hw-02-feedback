/*import React, { Component } from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

class Statistics extends Component {
    render() {
        const {good, neutral, bad, total, positivePercentage} = this.props;
        return (
            <div>
                <p className={styles.stats}>Good: {good}</p>
                <p className={styles.stats}>Neutral: {neutral}</p>
                <p className={styles.stats}>Bad: {bad}</p>
                <p className={styles.stats}>Total: {total}</p>
                <p className={styles.stats}>Positive feedback: {positivePercentage}%</p>
            </div>
        );
        
    } 
}
Statistics.propTypes = {
            good: PropTypes.number.isRequired,
            neutral: PropTypes.number.isRequired,
            bad: PropTypes.number.isRequired,
            total: PropTypes.number.isRequired,
            positivePercentage: PropTypes.string.isRequired
        }
export default Statistics;  */
import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={styles.stats}>Good: {good}</p>
      <p className={styles.stats}>Neutral: {neutral}</p>
      <p className={styles.stats}>Bad: {bad}</p>
      <p className={styles.stats}>Total: {total}</p>
      <p className={styles.stats}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};

export default Statistics;
