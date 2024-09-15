import React, { useState, useRef } from 'react';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  
  const intervalRef = useRef(null);

  const handlePressStart = (setCount) => {
    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 200); // Increment every 200ms while button is pressed
  };

  const handlePressEnd = (setCount) => {
    clearInterval(intervalRef.current);
    setCount(0); // Reset the counter when the button is released
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div>
        <p>Button 1: {count1}</p>
        <button 
          onMouseDown={() => handlePressStart(setCount1)} 
          onMouseUp={() => handlePressEnd(setCount1)} 
          onMouseLeave={() => handlePressEnd(setCount1)}>
          Button 1
        </button>
      </div>
      <div>
        <p>Button 2: {count2}</p>
        <button 
          onMouseDown={() => handlePressStart(setCount2)} 
          onMouseUp={() => handlePressEnd(setCount2)} 
          onMouseLeave={() => handlePressEnd(setCount2)}>
          Button 2
        </button>
      </div>
      <div>
        <p>Button 3: {count3}</p>
        <button 
          onMouseDown={() => handlePressStart(setCount3)} 
          onMouseUp={() => handlePressEnd(setCount3)} 
          onMouseLeave={() => handlePressEnd(setCount3)}>
          Button 3
        </button>
      </div>
      <div>
        <p>Button 4: {count4}</p>
        <button 
          onMouseDown={() => handlePressStart(setCount4)} 
          onMouseUp={() => handlePressEnd(setCount4)} 
          onMouseLeave={() => handlePressEnd(setCount4)}>
          Button 4
        </button>
      </div>
    </div>
  );
}

export default App;
