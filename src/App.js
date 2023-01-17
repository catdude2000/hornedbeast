import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import data from './data.json'
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      modalBeast: ''
    }
  }

handleClose= () => {
  this.setState({
    showModal: false
  });
}

handleOnShow =() => {
  this.setState({
    showModal: true,
    // modalBeast: 
  });
}



render () {
  return (
    <div className="App">
      <Header/>
      <Main
      // modalBeast={this.modalBeast}
      handleOnShow={this.handleOnShow}
      data={data}
      />
      <Footer/>
      <SelectedBeast
      data={data}
      handleOnShow={this.handleOnShow}
      handleClose={this.handleClose}
      />
 
    </div>
  );
}
}

export default App;
