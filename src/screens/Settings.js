import { useEffect } from 'preact/hooks';
import { Link } from 'preact-router';
import { set, del, get } from 'idb-keyval';

import BackIcon from '../components/BackIcon';
import { wakeUpTime } from '../signals/WakeUpTimeSignals';

export default function Settings() {
  useEffect(() => {
    const getWakeUpTime = () => {
      get('WakeUpTime').then((WakeUpTime) => setTime(WakeUpTime));
    }
    getWakeUpTime();
    return () => { };
  }, []);

  const setTime = (time) => {
    wakeUpTime.value = time
  }

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setTime(value)
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
