import React from 'react';
import BottomWidget from './BottomWidget';
import ControlWidget from './ControlWidget';
import TopWidget from './TopWidget';

const Clock = () => (
  <>
    <TopWidget />
    <BottomWidget
      text="Session"
      time="25:00"
    />
    <ControlWidget />
  </>
);

export default Clock;
