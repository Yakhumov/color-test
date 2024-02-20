import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [inputValue, setInputValue] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0); 
  const [timerStart, setTimerStart] = useState(false);

  useEffect(() => {
    let intervalId;
    if (timerStart) {
      intervalId = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(intervalId);
          setTimerStart(false);
        } else if (seconds === 0) {
          setMinutes(prevMinutes => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds(prevSeconds => prevSeconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timerStart, minutes, seconds]);

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = event => {
    if (event.key === 'Enter') {
      const inputMinutes = parseInt(inputValue);
      if (!isNaN(inputMinutes)) {
        setMinutes(inputMinutes);
        setSeconds(0);
        setTimerStart(true);
      }
    }
  };

  return (
    <div className='container'>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress} 
        placeholder="Введите число"
      />
      <div>
        {timerStart ? (
          <button>
            {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
          </button>
        ) : (
          <button>Готово</button> 
        )}
      </div>
    </div>
  );
};

export default Timer;
