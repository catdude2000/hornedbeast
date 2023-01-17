import React from "react";
import HornedBeast from "./HornedBeast";
import { Container, Row } from "react-bootstrap";
// import SelectedBeast from './SelectedBeast';

class Main extends React.Component {
  render() {
   
   
    // console.log("🚀 ~ file: Main.js:21 ~ Main ~ render ~ handleOnShow",this.props.handleOnShow);
    return (
      <>
        <Container>
          <Row>
            {this.props.data.map((beast, index) => (
              <HornedBeast
                title={beast.title}
                imageUrl={beast.image_url}
                description={beast.description}
                key={index}
                handleOnShow={this.props.handleOnShow}
              />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default Main;
