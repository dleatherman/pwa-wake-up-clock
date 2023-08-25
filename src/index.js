import Home from './screens/Home'
import Settings from './screens/Settings'

import Router from 'preact-router';

import './style';


export default function App() {
	return (
		<Router>
			<Home path="/" />
			<Settings path="/settings" />
		</Router>
	);
}
