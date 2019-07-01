import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { closeModal } from "../actions/action";

const ResultModal = props => {
  const {
    closeModal,
    modal: { modalIsOpen }
  } = props;
  return (
    <div>
      <Modal isOpen={modalIsOpen} ariaHideApp={false}>
        <div>I am a modal</div>
        <button onClick={() => closeModal()}>CLOSE</button>
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
  { closeModal }
)(ResultModal);
