const Widget = ({ id, text, time }) => (

  <div className="timeWidget" id={id}>
    <div className="row">

      <div className="arrow" id={`${text}-increment`}>
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
        <div className="arrow reverse" id={`${text}-decrement`}>
          <img src="arrow.svg" alt="arrow down" />
        </div>
      </div>

    </div>
);

const TopWidget = ({ handleSession, handleBreak }) => {
  
  return (
    <div className="widgetContainer">
      <Widget
        id="break-label"
        text="break"
        time="5"
      />
      <Widget
        id="session-label"
        text="session"
        time="25"
      />
    </div>
  );
}

export default TopWidget