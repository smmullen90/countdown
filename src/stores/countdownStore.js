import PropTypes from 'prop-types';
import { action, computed, observable } from 'mobx';


const SECONDS_IN = {
  day: 86400,
  hour: 3600,
  minute: 60
};
export default class CountdownStore {
  @observable timeUntilSec;

  countdownDate = new Date(2020, 5, 13, 9, 30, 0);

  @action
  calculate = () => {
    const diff = (this.countdownDate - Date.now()) / 1000;
    this.timeUntilSec = diff <= 0 ? 0 : diff;
    console.log('in calculate');
  }

  @computed
  get daysUntil() {
    return Math.floor(this.timeUntilSec / SECONDS_IN.day);
  }

  @computed
  get hoursUntil() {
    return Math.floor(this.timeUntilSec / SECONDS_IN.hour) % 24;
  }

  @computed
  get minutesUntil() {
    return Math.floor(this.timeUntilSec / SECONDS_IN.minute) % 60;
  }

  @computed
  get secondsUntil() {
    return Math.floor(this.timeUntilSec) % 60;
  }
}

export const COUNTDOWN_STORE_PROP_TYPES = PropTypes.shape({
  timeUntilSec: PropTypes.number,
  hoursUntil: PropTypes.number,
  daysUntil: PropTypes.number,
  minutesUntil: PropTypes.number,
  secondsUntil: PropTypes.number,
  calculate: PropTypes.func,
});
