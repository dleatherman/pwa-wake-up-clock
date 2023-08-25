import { useEffect, useState } from 'preact/hooks';
import { get } from 'idb-keyval';
import { wakeUpTime } from '../signals/WakeUpTimeSignals';
import { asleepTime } from '../signals/AsleepTimeSignals';

export default function Clock() {
  useEffect(() => {
    const getWakeUpTime = () => {
      get('WakeUpTime').then((WakeUpTime) => wakeUpTime.value = WakeUpTime);
    }
    getWakeUpTime();
    const getAsleepTime = () => {
      get('AsleepTime').then((AsleepTime) => asleepTime.value = AsleepTime);
    }
    getAsleepTime();
    const timer = setInterval(() => {
      let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      let compareTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
      setTime(time);
      setAwake(compareTime > wakeUpTime.value && compareTime < asleepTime.value);
    }, 1000);
    return () => clearInterval(timer);
  }, [wakeUpTime.value, asleepTime.value, useState]);

  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
  const [awake, setAwake] = useState(false)

  return (
    <h1 class={awake ? 'awake' : 'asleep'}>{time}</h1>
  )
}