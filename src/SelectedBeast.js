import React from "react";
import { Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {



    render () {
        return (
          <Modal show={this.props.show} onHide={this.props.onHide}>
            <Modal.Header  closeButton> 
              <Modal.Title>{this.props.modalBeast.title}</Modal.Title>
            </Modal.Header>
          </Modal>
        )
    }
    
}

export default SelectedBeast;
