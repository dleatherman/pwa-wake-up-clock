import SettingsIcon from '../components/SettingsIcon';
import Clock from '../components/Clock';
import { Link } from 'preact-router';

export default function Home() {
  return (
    <>
      <Link href="/settings">
        <SettingsIcon />
      </Link>
      <Clock />
    </>
  );
}
