import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Clock from './Components/Clock';

const App = () => {

  return(
    <>
      <div className="centered">
         <div id="clock">
            <Clock />
         </div>
       </div>
    </>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('app')
);

export default App;