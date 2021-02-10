import React, { useCallback, useEffect, useRef, useState } from 'react';
import BottomWidget from './BottomWidget';
import TopWidget from './TopWidget';


const DEFAULT_SESSION_TIME = 25
const DEFAULT_BREAK_TIME = 5

const Clock = () => {
  
  const [isClockActive, setIsClockActive] = useState(false)
  const [clockMode, setClockMode] = useState('session') // true = session / false = break
  const [sessionTime, setSessionTime] = useState(DEFAULT_SESSION_TIME) // 1500s = 25 minutos
  const [breakTime, setBreakTime] = useState(DEFAULT_BREAK_TIME) // 300 = 5 minutos
  const [remainingTime, setRemainingTime] = useState(sessionTime * 60)
  const interval = useRef(null)   // using Ref  

  const sound = document.getElementById("beep")

  const playSound = useCallback(() => {
    sound.currentTime = 0
    try {
      sound.play();
    } catch (e) {
      console.log("failed to connect server", e);
    }
  },[sound])

  const stopSound = useCallback(() => {
    sound.currentTime = 0
    try {
      sound.pause();
    } catch (e){
      console.log("failed to connect server", e);
    }
  }, [sound])

  // updateMain
  useEffect(() =>   
    setRemainingTime(clockMode === 'session' ? sessionTime * 60 : breakTime * 60)

  ,[breakTime, sessionTime, clockMode])
  // Clock Mode
  useEffect(() => {

    if(isClockActive) {
      if ((remainingTime === 0) && clockMode === 'session') {
        clearInterval(interval.current)
        setRemainingTime(breakTime)
        setClockMode('break')
        playSound()
      } else if ((remainingTime === 0) && clockMode === 'break') {
        clearInterval(interval.current)
        setRemainingTime(sessionTime)
        setClockMode('session')
        playSound()
      }
    }

  }, [breakTime, clockMode, isClockActive, remainingTime, sessionTime, playSound])
  // timeout count
  useEffect(() => {
    if (isClockActive) {
      interval.current = setInterval(() => {
        setRemainingTime(time => time - 1)
      }, 1000)
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
    setSessionTime(DEFAULT_SESSION_TIME)
    setBreakTime(DEFAULT_BREAK_TIME)
    setRemainingTime(DEFAULT_SESSION_TIME * 60)
    stopSound()
    
  }
  
  const handleSession = (val) => setSessionTime(x => x + val)
  const handleBreak = (val) => setBreakTime(x => x + val)
  
  return (
    <>
      <TopWidget
        handleSession={handleSession}
        handleBreak={handleBreak}
        breakTime={breakTime} 
        sessionTime={sessionTime}
        isClockActive={isClockActive}
      />
      <audio
      // audio forked from FCC's github
        id="beep"
        preload="auto"
        style={{display: 'hidden'}}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
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
