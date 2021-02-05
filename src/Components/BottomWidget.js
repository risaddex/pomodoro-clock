import React from 'react';

const BottomWidget = (props) => {
  
  

  return (
    <div className="bottomWidget">
      <div className="col-cel">
        {props.text}
      </div>
      
      <div className="col-cel">
        {props.time}
      </div>
    </div>
  );
}

export default BottomWidget;
