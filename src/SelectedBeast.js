import React from "react";
import { Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {


    render () {
        return (
          <Modal show={this.props.handleOnShow} onHide={this.props.handleClose}>
            <Modal.Header closeButton onClick={this.props.handleClose}>
              <Modal.Title>dsfsdf{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <Modal.Img src={this.props.imageUrl} /> */}
              {this.props.description}
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
