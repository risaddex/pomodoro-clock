import React from 'react';
import { parseTime } from '../utils/utils';
import ControlWidget from './ControlWidget';

const BottomWidget = ({ onPlayPause, onReset, remainingTime, clockMode }) => {

  return (
    <>
      <div className="bottomWidget">
        <div className="col-cel" id="timer-label">
          {clockMode}
        </div>

        <div className="col-cel" id="time-left">
          {parseTime(remainingTime)}
        </div>
      </div>
      <ControlWidget
        triggerPlayPause={onPlayPause}
        triggerReset={onReset}
      />
    </>
  );
}

export default BottomWidget;
