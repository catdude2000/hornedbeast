import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import { Modal } from 'react-bootstrap';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: ''
    }
  }

handleOnShow () {
  this.setState{
    showModal: true
  }
}


render () {
  return (
    <div className="App" 
    // onClick={this.handleOnShow}
    >
      <Header/>
      <Main
      //create/name props in this tag to pass them to Main component
      handleOnShow={this.handleOnShow}
      />
      <Footer/>
      {/* Modal, make seperate slected beast component for below modal */}
      <Modal show={this.state.showModal} 
      // onHide={this}
      >
        <Modal.Header>
          <Modal.Title>{this.state.selectedBeast}</Modal.Title>
        </Modal.Header>
      </Modal>
    </div>
  );
}
}

export default App;
