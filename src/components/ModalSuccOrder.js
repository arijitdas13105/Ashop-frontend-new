import React from "react";

const ModalSuccOrder = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <>
      <div className="modal-suc-container">
        <div className="modal-suc-wrapper">
          <h4>Order SuccessFull</h4>

          <img src="https://cdn.pixabay.com/photo/2014/10/24/09/03/quality-500950_960_720.png" />
          <div className="modal-close-btn" onClick={props.onClose}>
            <i class="fa-solid fa-xmark modal-close"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSuccOrder;
