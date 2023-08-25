import { useEffect } from 'preact/hooks';
import { get } from 'idb-keyval';

import { wakeUpTime } from './signals/WakeUpTimeSignals';

import Home from './screens/Home'
import Settings from './screens/Settings'

import Router from 'preact-router';

import './style';


export default function App() {
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

	return (
		<Router>
			<Home path="/" />
			<Settings path="/settings" />
		</Router>
	);
}
