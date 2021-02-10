import React, { useEffect, useRef, useState } from 'react';
import BottomWidget from './BottomWidget';
import TopWidget from './TopWidget';


const DEFAULT_SESSION_TIME = 25
const DEFAULT_BREAK_TIME = 5

const Clock = () => {
  
  const [isClockActive, setIsClockActive] = useState(false)
  const [clockMode, setClockMode] = useState('session') // true = session / false = break
  const [sessionTime, setSessionTime] = useState(DEFAULT_SESSION_TIME) // 1500s = 25 minutos
  const [breakTime, setBreakTime] = useState(DEFAULT_BREAK_TIME) // 300 = 5 minutos
  const [remainingTime, setRemainingTime] = useState(DEFAULT_SESSION_TIME)
  const interval = useRef(null)   // using Ref  

  useEffect(() => {

    if ((remainingTime === 0) && clockMode === 'session') {
      clearInterval(interval.current)
      setClockMode('break')
      setRemainingTime(breakTime)
    } else if ((remainingTime === 0) && clockMode === 'break') {
      clearInterval(interval.current)
      setClockMode('session')
      setRemainingTime(sessionTime)
    }

  }, [breakTime, clockMode, remainingTime, sessionTime])

  useEffect(() => {

    if (isClockActive) {
      interval.current = setInterval(() => {
        setRemainingTime(time => time - 1)
      }, 1000)
      console.log('render')
    }
    else {
      clearInterval(interval.current)
    }

  }, [clockMode, isClockActive])

  const onPlayPause = () => setIsClockActive(!isClockActive)
  const onReset = () => {
    clearTimeout(interval.current)
    setIsClockActive(false)
    setClockMode('session')
    setSessionTime(DEFAULT_SESSION_TIME * 60)
    setBreakTime(DEFAULT_BREAK_TIME * 60)
    setRemainingTime(DEFAULT_SESSION_TIME * 60)
  }
  const handleSession = (val) => setSessionTime(x => x + val)
  const handleBreak = (val) => setBreakTime(x => x + val)
  
  return (
    <>
      <TopWidget
        handleSession={handleSession}
        handleBreak={handleBreak}
      />
      <BottomWidget
        onPlayPause={onPlayPause}
        onReset={onReset}
        remainingTime={remainingTime}
        clockMode={clockMode}
      />
    </>
  );
}

export default Clock;
