import React, { useEffect, useRef, useState } from 'react';
import { parsedRemainingTime } from '../utils/utils';

const BottomWidget = () => {
  const [clockMode, setClockMode] = useState('session')
  const [remainingTime, setRemainingTime] = useState(5) // 1500s = 25 minutos
  // using Ref
  const interval = useRef(null)

  useEffect(() => {
    interval.current = setTimeout(() => {
      setRemainingTime(remainingTime - 1)
    }, 1000)

    return () => {
      clearTimeout(interval.current)
    }
    
  }, [remainingTime])

  useEffect(() => {
    if(remainingTime === 0) {
      clearTimeout(interval.current)
    }
  }, [remainingTime])

  
  return (
    <div className="bottomWidget">
      <div className="col-cel" id="timer-label">
        {clockMode}
      </div>
      
      <div className="col-cel" id="time-left">
        {parsedRemainingTime(remainingTime)}
      </div>
    </div>
  );
}

export default BottomWidget;
