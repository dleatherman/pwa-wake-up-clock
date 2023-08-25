import { useEffect } from 'preact/hooks';
import { Link } from 'preact-router';
import { set, del } from 'idb-keyval';

import { wakeUpTime } from '../signals/WakeUpTimeSignals';
import { asleepTime } from '../signals/AsleepTimeSignals';

import BackIcon from '../components/BackIcon';

export default function Settings() {

  const handleWakeUpTimeChange = (e) => {
    const value = e.target.value;
    if (value) {
      set('WakeUpTime', value)
        .catch((err) => console.warn(err));
    } else {
      del('WakeUpTime')
        .catch((err) => console.warn(err));
    }
  }

  const handleAsleepTimeChange = (e) => {
    const value = e.target.value;
    if (value) {
      set('AsleepTime', value)
        .catch((err) => console.warn(err));
    } else {
      del('AsleepTime')
        .catch((err) => console.warn(err));
    }
  }

  return (
    <>
      <Link href="/">
        <BackIcon />
      </Link>
      <label for="asleep">
        Bedtime
      </label>
      <input type="time" id="asleep" name="asleep" value={asleepTime.value} required onChange={handleAsleepTimeChange} />
      <label for="wakeup">
        Wake Up Time
      </label>
      <input type="time" id="wakeup" name="wakeup" value={wakeUpTime.value} required onChange={handleWakeUpTimeChange} />
    </>
  );
}
