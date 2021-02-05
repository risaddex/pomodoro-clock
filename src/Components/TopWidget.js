const Widget = ({ id, text, time }) => (

  <div className="timeWidget" id={id}>
    <div className="row">

      <div className="arrow">
        <img src="arrow.svg" alt="arrow up" />
      </div>

      <div className="widgetContent">
        <div>
          {text}
        </div>
        <div>
          {time}
        </div>
      </div>
        <div className="arrow reverse">
          <img src="arrow.svg" alt="arrow down" />
        </div>
      </div>

    </div>
);

const TopWidget = ( ) => (
  <div className="widgetContainer">
    <Widget
      id="break-label"
      text="Break"
      time="5"
    />
    <Widget
      id="session-label"
      text="Session"
      time="25"
    />
  </div>
);

export default TopWidget