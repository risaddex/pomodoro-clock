import React from 'react';
import BottomWidget from './BottomWidget';
import ControlWidget from './ControlWidget';
import TopWidget from './TopWidget';

const Clock = () => (
  <>
    <TopWidget />
    <BottomWidget
      text="texto"
      time="time"
    />
    <ControlWidget />
  </>
);

export default Clock;
