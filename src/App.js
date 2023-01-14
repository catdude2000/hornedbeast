import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import { Modal } from 'react-bootstrap';
import data from './data.json'
import SelectedBeast from './SelectedBeast';

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
      data={data}
      handleOnShow={this.handleOnShow}
      />
      <Footer/>
      <SelectedBeast/>
 
    </div>
  );
}
}

export default App;
