import React from "react";
import { Image, Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {


    render () {
        return (
          <Modal show={this.props.handleOnShow} onHide={this.props.handleClose}>
            <Modal.Header closeButton onClick={this.props.handleClose}>
              <Modal.Title>{this.props.modalBeast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
              <Image src={this.props.modalBeast.imageUrl} />
              {this.props.modalBeast.description}
            </Modal.Body>
            {/* <Modal.Footer
              onClick={this.props.handleClose}>
              Close Modal
            </Modal.Footer> */}
          </Modal>
        )
    }
    
}

export default SelectedBeast;
