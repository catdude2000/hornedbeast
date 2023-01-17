import React from "react";
import { Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     // showModal: true,
  //     // modalBeast: ''
  //   }
  // }

//   clickHandleOnShow = () => {
//     this.props.handleOnShow(
//         this.props.title, 
//         this.props.imageUrl, 
//         this.props.description,
//         console.log(this.props.title, this.props.description, 'title and description'))
// };

  // clickHandleClose = () => {
  //   this.props.handleClose()
  // }


    render () {
        return (
          <Modal show={this.props.handleOnShow} onHide={this.props.handleClose}>
            <Modal.Header closeButton onClick={this.props.handleClose}>
              <Modal.Title>dsfsdf{this.props.title}</Modal.Title>
            </Modal.Header>
            {/* <Modal.Body>
              <Modal.Img src={this.props.imageUrl} />
              {this.props.description}
            </Modal.Body>
            <Modal.Footer
              onClick={this.clickHandleClose}>
              Close Modal
            </Modal.Footer> */}
          </Modal>
        )
    }
    
}

export default SelectedBeast;
