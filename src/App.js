import "./App.css";
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import data from './data.json'
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalBeast: ""
    }
  }

handleOnShow = (modalBeast) => {
  this.setState({
    showModal: true,
    modalBeast: modalBeast
  });
}

handleClose = () => {
  this.setState({
    showModal: false
  });
}

render () {
  return (
    <div className="App">
      <Header/>
      <Main
      handleOnShow={this.handleOnShow}
      data={data}
      />
      <SelectedBeast
      modalBeast={this.state.modalBeast}
      handleOnShow={this.state.showModal}
      handleClose={this.handleClose}
      />
      <Footer/>

    </div>
  );
}
}

export default App;
