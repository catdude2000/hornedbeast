import React from "react";
import HornedBeast from "./HornedBeast";
import { Container, Row } from "react-bootstrap";

class Main extends React.Component {
  render() {
   
   
    // console.log("🚀 ~ file: Main.js:21 ~ Main ~ render ~ handleOnShow",this.props.handleOnShow);
    return (
      <>
        <Container>
          <Row lg={4} md={3} sm={2} xs={1}>
            {this.props.data.map((beast, index) => (
              <HornedBeast
                title={beast.title}
                imageUrl={beast.image_url}
                description={beast.description}
                key={index}
                beast={beast}
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
