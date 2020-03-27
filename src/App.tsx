import * as React from 'react';
import { Boxes } from './Boxes';

export const App = () => {
  const [ready, setReady] = React.useState(false);

  // we are running animations, it's good to have a clear page first
  React.useEffect(() => {
    const handle = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(handle);
  }, []);

  return ready ? <Boxes /> : null;
};
