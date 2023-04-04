import React from "react";
import HornedBeast from "./HornedBeast";
import { Container, Row, Form } from "react-bootstrap";

    // console.log("🚀 ~ file: Main.js:21 ~ Main ~ render ~ handleOnShow",this.props.handleOnShow);

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedHorns: this.props.data,
            hornNum: ""
        }
    }

        handleSelect = (event) => {
            let selected = event.target.value;
            if (selected === "1") {
                let newData = this.props.data.filter((number) => {
                    return (number.horns.toString() === selected);
                })
                this.setState({ sortedHorns: newData });
            }   else if (selected === "2") {
                let newData = this.props.data.filter((number) => {
                    return (number.horns.toString() === "2");
                })
                this.setState({ sortedHorns: newData });
            }   else if (selected === "3") {
                let newData = this.props.data.filter((number) => {
                    return (number.horns.toString() === "3");
                })
                this.setState({ sortedHorns: newData });
            } else if (selected === "100") {
                let newData = this.props.data.filter((number) => {
                    return (number.horns.toString() === "100");
                })
                console.log("selected 100")
                this.setState({ sortedHorns: newData });
            } else {
                this.setState({ sortedHorns: this.props.data });
            }
        };
    render() {

        return(
            <>
            <Form onSubmit={this.handleSubmit}>
                <Form.Select name='selected' onChange={this.handleSelect}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="100">100</option>
                </Form.Select>
            </Form>
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
        )
        }

}

export default Main;
