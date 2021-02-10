import React from 'react';

const Widget = ({ id, text, time, handleClick }) => {

  const increase = () => time < 60 ? handleClick(+1) : null
  const decrease = () => time > 1 ? handleClick(-1) : null

  return (
    <div className="timeWidget" id={id}>
      <div className="row">

        <div
          className="arrow"
          id={`${text}-increment`}
          onClick={increase}
        >
          <img src="arrow.svg" alt="arrow up" />
        </div>

        <div className="widgetContent">
          <div>
            {text}
          </div>
          <div id={`${text}-length`}>
            {time}
          </div>
        </div>
          <div
            className="arrow reverse"
            id={`${text}-decrement`}
            onClick={decrease}
          >
            <img src="arrow.svg" alt="arrow down" />
          </div>
        </div>
    </div>
  );
}

const TopWidget = ({ handleSession, handleBreak, sessionTime, breakTime, isClockActive }) => {
  
  
  return (
    <div className={`widgetContainer ${isClockActive ? 'disabledClick' : ''}`}>
      <Widget
        id="break-label"
        text="break"
        time={breakTime}
        handleClick={handleBreak}
        isClockActive={isClockActive}
      />
      <Widget
        id="session-label"
        text="session"
        time={sessionTime}
        handleClick={handleSession}
        isClockActive={isClockActive}
      />
    </div>
  );
}

export default TopWidget