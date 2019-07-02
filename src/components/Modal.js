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
          <h1>THREE-IN-A-ROW!</h1>
          <h2>SWITCH TO ANOTHER PLAYER</h2>
          <button
            className="button button__switchPlayer"
            onClick={() => handleSwitchPlayer(props.current)}
          >
            SWITCH
          </button>

          {/* <button className="button" onClick={() => closeModal()}> */}
          <span className="cancel__switch" onClick={() => closeModal()}>
            <p>No, continue as current player</p>
          </span>
          {/* </button> */}
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
