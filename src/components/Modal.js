import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { closeModal, addPlayer2 } from "../actions/action";

const ResultModal = props => {
  const {
    closeModal,
    addPlayer2,
    modal: { modalIsOpen }
  } = props;

  const addPlayer = () => {
    closeModal();
    addPlayer2();
  };
  return (
    <div>
      <Modal className="modal" isOpen={modalIsOpen} ariaHideApp={false}>
        <div>
          <h2>THREE-IN-A-ROW!</h2>
          <h4>SWITCH TO PLAYER 2</h4>
          <button onClick={() => addPlayer()}>SWITCH</button>
          <p>No, continue as Player 1</p>
          <button onClick={() => closeModal()}>CLOSE</button>
        </div>
      </Modal>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

export default connect(
  mapStateToProps,
  { closeModal, addPlayer2 }
)(ResultModal);
