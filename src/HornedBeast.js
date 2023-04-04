import { Button, Card } from "react-bootstrap";
import React from "react";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: 0,
    };
  }

  handleHearts = () => {
    this.setState({
      hearts: this.state.hearts + 1,
    });
  };

  clickHandleOnShow = () => {
    console.log('fire');
    this.props.handleOnShow(this.props.beast);
  };

  render() {
    console.log('() from main ',this.props.handleOnShow);
    console.log('function in horned Beast', this.props.beast);
    return (
      <>
        <Card style={{ width: "30%" }}>
          <h2>{this.props.title}</h2>
          <Card.Img
            style={{ width: "100%" }}
            src={this.props.imageUrl}
            alt={this.props.description}
            title={this.props.title}
            onClick={this.clickHandleOnShow}
          />
          <p>{this.props.description}</p>
          <p>💖{this.state.hearts}</p>
          <Button onClick={this.handleHearts}>
            Click here to give these beasts love!
          </Button>
        </Card>
      </>
    );
  }
}

export default HornedBeast;
