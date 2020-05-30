import React, { useEffect } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';


const App = inject('countdownStore')(observer((props) => {
  const { countdownStore } = props;

  // debugger
  useEffect(() => {
    const interval = setInterval(countdownStore.calculate, 1000);
    return () => { debugger; clearInterval(interval)};
  }, [countdownStore.calculate]);

  const {
    daysUntil,
    secondsUntil,
    hoursUntil,
    minutesUntil,
    countdownDate
  } = countdownStore;

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Shaun heads to PDX in</p>
          <p className="countdown-date">
            {daysUntil} days, {hoursUntil} hours, {minutesUntil} minutes, {secondsUntil} seconds
          </p>
          <p>on {countdownDate.toLocaleDateString()}.</p>
        </div>
      </header>
    </div>
  );
}));

export default App;
