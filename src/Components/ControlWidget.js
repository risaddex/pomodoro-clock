import React from 'react';

const ControlWidget = ({ triggerPlayPause, triggerReset }) => (

  <div className="controls-widget">
    <div id="start_stop" onClick={triggerPlayPause}>
      Play/
      Pause
    </div>

    <div id="reset" onClick={triggerReset}>
      Reset
    </div>
  </div>

);

export default ControlWidget;
