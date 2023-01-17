import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";
import data from "./data.json";
import SelectedBeast from "./SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalBeast: "",
    };
  }

  handleOnShow = () => {
    this.setState({
      showModal: true,
      // modalBeast: modalBeast
    });
  }

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          // modalBeast={this.modalBeast}
          handleOnShow={this.handleOnShow}
          data={data}
        />
        <Footer />
       
       
        <SelectedBeast handleOnShow={this.handleOnShow} />
      </div>
    );
  }
}

export default App;
