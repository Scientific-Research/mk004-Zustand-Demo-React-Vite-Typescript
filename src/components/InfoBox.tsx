import { useStore } from '../store';

// interface IMessage {
//   message: string;
// }

// export const InfoBox = ({ message }: IMessage) => {
export const InfoBox = () => {
  const store = useStore((state) => state);

  const { message, setMessage } = store; // Deconstructuring

  return (
    <div className="infoBox">
      <h2>Another component:</h2>

      {/* MESSAGE */}
      <div className="row">
        <label htmlFor="">Message:</label> {''}
        <span className="theValue">{message}</span>
        {/* <span className="theValue">{store.message}</span> */}
      </div>

      {/* COLORS */}
      <div className="row">
        <label>Colors:</label>{' '}
        <span className="theValue">
          {store.colors.map((m) => m).join(', ')}
        </span>
      </div>
    </div>
  );
};
