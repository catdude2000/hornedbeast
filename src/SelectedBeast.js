import React from "react";
import { Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {

  constructor(props){
    super(props);
    
  }

    render () {
        return (
          <Modal show={this.props.handleOnShow} onHide={this.props.handleClose}>
            <Modal.Header  closeButton>
              <Modal.Title>dsfsdf{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src={this.props.beast.imageUrl} />
              {this.props.beast.description}
            </Modal.Body>
          </Modal>
        )
    }
    
}

export default SelectedBeast;
