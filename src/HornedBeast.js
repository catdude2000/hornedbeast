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

  clickHandleOnShow = (beast) => {
    console.log('this stuff', this.props.title,this.props.imageUrl,this.props.description);
    this.props.handleOnShow(beast);
  };

  render() {
    // console.log('function in horned Beast', this.props.handleOnShow);
    return (
      <>
        <Card style={{ width: "30%" }}>
          <h2>{this.props.title}</h2>
          <Card.Img
            style={{ width: "100%" }}
            src={this.props.imageUrl}
            alt={this.props.description}
            title={this.props.title}
            onClick={() => this.clickHandleOnShow(this.props.beast)}
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
