import React, { useEffect } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';

function formatNumber(number) {
  return number.toString().padStart(2, '0');
}

const App = inject('countdownStore')(observer((props) => {
  const { countdownStore } = props;

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

  if (isNaN(daysUntil)) {
    return;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <p className="support">Shaun heads to PDX in</p>
          <div className="countdown">
            <div>
              <p className="countdown__number">{formatNumber(daysUntil)}</p>
              <p className="countdown__title">days</p>
            </div>
            <div>
              <p className="countdown__number">{formatNumber(hoursUntil)}</p>
              <p className="countdown__title">hrs</p>
            </div>
            <div>
              <p className="countdown__number">{formatNumber(minutesUntil)}</p>
              <p className="countdown__title">mins</p>
            </div>
            <div>
              <p className="countdown__number">{formatNumber(secondsUntil)}</p>
              <p className="countdown__title">secs</p>
            </div>
          </div>
          <p className="support">on {countdownDate.toLocaleDateString()}.</p>
        </div>
      </header>
    </div>
  );
}));

export default App;
