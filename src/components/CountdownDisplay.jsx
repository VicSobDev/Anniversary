import React from 'react';
import { styles } from '../styles/CountdownTimerStyles';

// CountdownDisplay component is responsible for displaying the countdown timer.
// It expects a 'countdown' prop which contains the time remaining until the next special day.
const CountdownDisplay = ({ countdown }) => {
  // Render a div with the countdown time styled using 'countdownStyle' from CountdownTimerStyles.
  return <div style={styles.countdownStyle}>{countdown}</div>;
};

// Make the CountdownDisplay component available for import in other files.
export default CountdownDisplay;
