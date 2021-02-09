import React from 'react';

const BottomWidget = (props) => {
  
  

  return (
    <div className="bottomWidget">
      <div className="col-cel" id="timer-label">
        {props.text}
      </div>
      
      <div className="col-cel" id="time-left">
        {props.time}
      </div>
    </div>
  );
}

export default BottomWidget;
