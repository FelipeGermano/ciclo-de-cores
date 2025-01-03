import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [red, setRed] = useState('00');
  const [green, setGreen] = useState('00');
  const [blue, setBlue] = useState('00');
  const [redIncrement, setRedIncrement] = useState(0);
  const [greenIncrement, setGreenIncrement] = useState(0);
  const [blueIncrement, setBlueIncrement] = useState(0);
  const [intervalTime, setIntervalTime] = useState(250);
  const [isRunning, setIsRunning] = useState(false);
  const [colorFormat, setColorFormat] = useState('RGB');

  const adjustColorValue = (value, increment) => {
    let decimalValue = parseInt(value, 16);
    decimalValue = (decimalValue + increment) % 256;
    if (decimalValue < 0) decimalValue += 256;
    return decimalValue.toString(16).padStart(2, '0');
  };

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setRed((prev) => adjustColorValue(prev, redIncrement));
      setGreen((prev) => adjustColorValue(prev, greenIncrement));
      setBlue((prev) => adjustColorValue(prev, blueIncrement));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isRunning, redIncrement, greenIncrement, blueIncrement, intervalTime]);

  const handleColorPickerChange = (value) => {
    const color = value.slice(1); 
    setRed(color.slice(0, 2));
    setGreen(color.slice(2, 4));
    setBlue(color.slice(4, 6));
  };

  const handleIncrementChange = (setter, value) => {
    setter(Number(value) || 0);
  };

  const getFormattedColor = () => {
    switch (colorFormat) {
      case 'RGB':
        return `#${red}${green}${blue}`;
      case 'HSL': {
        const r = parseInt(red, 16) / 255;
        const g = parseInt(green, 16) / 255;
        const b = parseInt(blue, 16) / 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const delta = max - min;

        let h = 0;
        if (delta) {
          if (max === r) h = ((g - b) / delta) % 6;
          else if (max === g) h = (b - r) / delta + 2;
          else h = (r - g) / delta + 4;
        }
        h = Math.round(h * 60);
        if (h < 0) h += 360;

        const l = (max + min) / 2;
        const s = delta ? delta / (1 - Math.abs(2 * l - 1)) : 0;

        return `hsl(${h}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
      }
      default:
        return `#${red}${green}${blue}`;
    }
  };

  return (
    <div className="App">
      <div
        className="color-box"
        style={{ backgroundColor: getFormattedColor() }}
      >
        <div className="controls">
          <div>
            <label>Color Picker:</label>
            <input
              type="color"
              value={`#${red}${green}${blue}`}
              onChange={(e) => handleColorPickerChange(e.target.value)}
              disabled={isRunning}
            />
          </div>

          <div>
            <label>Red Increment:</label>
            <input
              type="number"
              value={redIncrement}
              onChange={(e) => handleIncrementChange(setRedIncrement, e.target.value)}
              disabled={isRunning}
            />
          </div>
          <div>
            <label>Green Increment:</label>
            <input
              type="number"
              value={greenIncrement}
              onChange={(e) => handleIncrementChange(setGreenIncrement, e.target.value)}
              disabled={isRunning}
            />
          </div>
          <div>
            <label>Blue Increment:</label>
            <input
              type="number"
              value={blueIncrement}
              onChange={(e) => handleIncrementChange(setBlueIncrement, e.target.value)}
              disabled={isRunning}
            />
          </div>

          <div>
            <label>Interval Time (ms):</label>
            <input
              type="number"
              value={intervalTime}
              onChange={(e) => setIntervalTime(Number(e.target.value) || 250)}
              disabled={isRunning}
            />
          </div>

          <div>
            <label>Color Format:</label>
            <select
              value={colorFormat}
              onChange={(e) => setColorFormat(e.target.value)}
              disabled={isRunning}
            >
              <option value="RGB">RGB</option>
              <option value="HSL">HSL</option>
            </select>
          </div>

          <button onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
        </div>
      </div>

    </div>
  );
};

export default App;
