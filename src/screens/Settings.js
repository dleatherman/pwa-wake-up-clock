import { useEffect } from 'preact/hooks';
import { Link } from 'preact-router';
import { set, del, get } from 'idb-keyval';

import { wakeUpTime } from '../signals/WakeUpTimeSignals';

import BackIcon from '../components/BackIcon';

export default function Settings() {

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      set('WakeUpTime', value)
        .catch((err) => console.warn(err));
    } else {
      del('WakeUpTime')
        .catch((err) => console.warn(err));
    }
  }

  return (
    <>
      <Link href="/">
        <BackIcon />
      </Link>
      <label for="wakeup">
        Wake Up Time
      </label>
      <input type="time" id="wakeup" name="wakeup" value={wakeUpTime.value} required onChange={handleChange} />
    </>
  );
}
