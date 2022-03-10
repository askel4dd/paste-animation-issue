import { SkeletonLoader } from '@twilio-paste/skeleton-loader';
import { useState } from 'react';

export default function App() {
  const [state, setState] = useState(false); 
  return (
    <div className="App">
      {state && <SkeletonLoader width={117} height={20} borderRadius={'borderRadius20'} />}
      <div onClick={() => setState(state => !state)}>Test</div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

