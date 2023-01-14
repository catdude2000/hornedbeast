import React from "react";
import { Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {
    render () {
        return (
                 {/* Modal, make seperate slected beast component for below modal */}
      <Modal show={this.state.showModal} 
      // onHide={this}
      >
        <Modal.Header>
          <Modal.Title>{this.state.selectedBeast}</Modal.Title>
        </Modal.Header>
      </Modal>
        )
    }
    
}

export default SelectedBeast;
