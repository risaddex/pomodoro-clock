import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Clock from './Components/Clock';

const App = () => {

  return(
    <>
      <div className="centered">
         <div id="clock">
          <h2>pomoclock</h2>
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