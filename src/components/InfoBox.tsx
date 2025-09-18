import React from 'react';
import { useStore } from '../store';
import { FaSpinner } from 'react-icons/fa';

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

      {/* CURRENT USER STATUS */}
      <div className="row">
        <label>User is online:</label>{' '}
        <span className="theValue">
          {store.currentUserStatus.isOnline ? 'yes' : 'no'}
        </span>
      </div>
      <div className="row">
        <label>User's email is valid:</label>{' '}
        <span className="theValue">
          {store.currentUserStatus.emailIsConfirmed ? 'yes' : 'no'}
        </span>
      </div>

      {/* TECHBOOKS */}
      <div className="row">
        <label>TechBooks:</label>
        {store.techBooksAreLoading && (
          <p>
            <FaSpinner className="spinner" />
          </p>
        )}
        <ul>
          {store.techBooks.map((techBook, i) => {
            return (
              <React.Fragment key={i}>
                {techBook.title
                  .toLowerCase()
                  .includes(store.techBookSearch.toLowerCase()) && (
                  <li key={i}>{techBook.title}</li>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
