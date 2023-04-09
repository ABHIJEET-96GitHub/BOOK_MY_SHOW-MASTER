import React, { useState } from 'react';
import App from '../../App';

export function NavBar() {
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return (
        <div>
            <div>Showing Login form</div>
            <App></App>
            <span>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </span>
        </div>
    );
  } else {
    <div>
        <span>
            <button onClick={() => setShowLogin(true)}>Sign In</button>
        </span>
    </div>
  }
  return (
    <></>
  );
}