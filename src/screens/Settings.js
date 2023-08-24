import { Link } from 'preact-router';

import BackIcon from '../components/BackIcon';

export default function Settings() {
  return (
    <Link href="/">
      <BackIcon />
    </Link>
  );
}
