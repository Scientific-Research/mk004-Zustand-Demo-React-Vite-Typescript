interface IMessage {
  message: string;
}

export const InfoBox = ({ message }: IMessage) => {
  return (
    <div className="infoBox">
      <h2>Another component:</h2>
      <div className="row">
        <label htmlFor="">Message:</label> {''}
        <span className="theValue">{message}</span>
      </div>
    </div>
  );
};
