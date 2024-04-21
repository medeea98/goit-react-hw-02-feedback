/*import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

class Notification extends Component {
    render() {
        const { message } = this.props;
        return (
            <p className={styles.notification}>{message}</p>
        );
    }
}
Notification.propTypes = {
    message: PropTypes.string.isRequired
};

export default Notification;
  */
 import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <p className={styles.notification}>{message}</p>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired
};

export default Notification;