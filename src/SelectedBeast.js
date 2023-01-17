import React from "react";
import { Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {



    render () {
        return (
          <Modal  show={this.props.handleOnShow} onHide={this.props.handleOnClose}>
            <Modal.Header closeButton onClick={this.props.handleClose}>
              <Modal.Title>dsfsdf{this.props.title}</Modal.Title>
            </Modal.Header>
          </Modal>
        )
    }
    
}

export default SelectedBeast;
