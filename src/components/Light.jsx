import React, { useState } from 'react';
import '../App.css'; // Corrected path to the CSS file

function Light() {
  const [isMainSwitchOn, setIsMainSwitchOn] = useState(false);
  const [activeBulb, setActiveBulb] = useState(''); // Only one bulb can be active at a time

  const toggleMainSwitch = () => {
    setIsMainSwitchOn(!isMainSwitchOn);
    // If the main switch is turned off, turn off all bulbs
    if (isMainSwitchOn) {
      setActiveBulb('');
    }
  };

  const handleBulbClick = (color) => {
    if (!isMainSwitchOn) {
      alert('Please start the main switch!');
      return;
    }

    setActiveBulb(color); // Only set the clicked bulb as active
  };

  return (
    <div className="App">
      <h1>Light Bulb Control</h1>

      <button onClick={toggleMainSwitch} className="main-switch">
        {isMainSwitchOn ? 'Turn Off Main Switch' : 'Turn On Main Switch'}
      </button>

      <div className="bulbs-container">
        {/* Red Bulb */}
        <div className={`bulb ${activeBulb === 'red' ? 'red' : ''}`}></div>
        <button onClick={() => handleBulbClick('red')}>Red Light</button>

        {/* Blue Bulb */}
        <div className={`bulb ${activeBulb === 'blue' ? 'blue' : ''}`}></div>
        <button onClick={() => handleBulbClick('blue')}>Blue Light</button>

        {/* Green Bulb */}
        <div className={`bulb ${activeBulb === 'green' ? 'green' : ''}`}></div>
        <button onClick={() => handleBulbClick('green')}>Green Light</button>
      </div>
    </div>
  );
}

export default Light;
