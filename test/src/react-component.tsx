// React TypeScript test file
import React, { useState, useEffect } from 'react';

interface Props {
  title: string;
  count?: number;
  onCountChange?: (count: number) => void;
}

export const Counter: React.FC<Props> = ({ title, count = 0, onCountChange }) => {
  const [currentCount, setCurrentCount] = useState(count);

  useEffect(() => {
    setCurrentCount(count);
  }, [count]);

  const handleIncrement = () => {
    const newCount = currentCount + 1;
    setCurrentCount(newCount);
    onCountChange?.(newCount);
  };

  const handleDecrement = () => {
    const newCount = currentCount - 1;
    setCurrentCount(newCount);
    onCountChange?.(newCount);
  };

  return (
    <div className="counter">
      <h2>{title}</h2>
      <div className="counter-display">
        <span>Count: {currentCount}</span>
      </div>
      <div className="counter-controls">
        <button onClick={handleDecrement} type="button">
          -
        </button>
        <button onClick={handleIncrement} type="button">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;