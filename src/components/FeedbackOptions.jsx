import React, { Component } from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
    return (
    <div>
    {options.map(option => (
      <button className= {styles.options} key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);
    }
}
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}
export default FeedbackOptions;