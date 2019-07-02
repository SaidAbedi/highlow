import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { closeModal } from "../actions/action";

const ResultModal = props => {
  const {
    closeModal,
    handleSwitchPlayer,
    modal: { modalIsOpen }
  } = props;

  return (
    <div>
      <Modal className="modal" isOpen={modalIsOpen} ariaHideApp={false}>
        <div>
          <h2>THREE-IN-A-ROW!</h2>
          <h4>SWITCH TO PLAYER</h4>
          <button onClick={() => handleSwitchPlayer(props.current)}>
            SWITCH
          </button>
          <p>No, continue as current player</p>
          <button onClick={() => closeModal()}>CLOSE</button>
        </div>
      </Modal>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    modal: state.modal,
    current: state.players
  };
};

export default connect(
  mapStateToProps,
  { closeModal }
)(ResultModal);
