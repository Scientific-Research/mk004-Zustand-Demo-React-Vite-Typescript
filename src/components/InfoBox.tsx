interface IMessage {
  message: string;
}

export const InfoBox = ({ message }: IMessage) => {
  return (
    <div className="infoBox">
      <h2>Another component:</h2>
      <p>message:{message}</p>
    </div>
  );
};
