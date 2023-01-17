import React from "react";
import { Modal, Image } from 'react-bootstrap';

class SelectedBeast extends React.Component {


    render () {
        return (
          <Modal onClick={this.props.handleOnShow} onHide={this.props.handleClose}>
            <Modal.Header>
              <Modal.Title>dsfsdf{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src={this.props.imageUrl} />
              {this.props.description}
            </Modal.Body>
            <Modal.Footer>
              onClick={this.props.handleClose}
              Close Modal
            </Modal.Footer>
          </Modal>
        )
    }
    
}

export default SelectedBeast;
