import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm} />
      <div className="modal">
        <header className="header">
          <h2>{props.name}</h2>
        </header>
        <div className="content">
          <p>
            Size: {props.size} <br />
            Description: {props.description} <br></br> Price: ${props.price}
          </p>
        </div>
        <footer className="actions">
          <button onClick={props.onConfirm}>Close</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
