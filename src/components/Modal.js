import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { closeModal } from "../actions/action";

const ResultModal = props => {
  return (
    <div>
      <Modal isOpen={props.isOpen}>
        <div>I am a modal</div>
        <button onClick={() => this.props.closeModal()}>CLOSE</button>
      </Modal>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    modal: state.modal.isOpen
  };
};

export default connect(
  mapStateToProps,
  { closeModal }
)(ResultModal);
