import React from "react";
import HornedBeast from "./HornedBeast";
import { Container, ListGroup, Row, Form } from "react-bootstrap";

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
            if (selected === 1) {
                ///////////////////////////////// .horns??
                let newData = this.props.data.horns.filter((number) => number);
                this.setState({ sortedHorns: newData });
            }   else if (selected === 2) {
                ///////////////////////////////// .horns??
                let newData = this.props.data.horns.filter((number) => number);
                this.setState({ sortedHorns: newData });
            }   else if (selected === 3) {
                ///////////////////////////////// .horns??
                let newData = this.props.data.horns.filter((number) => number);
                this.setState({ sortedHorns: newData });
            } else if (selected === 100) {
                ///////////////////////////////// .horns??
                let newData = this.props.data.horns.filter((number) => number);
                this.setState({ sortedHorns: newData });
            } else {
                this.setState({ sortedHorns: this.props.data });
            }
        };
    render() {

        // let dispHorns = this.props.sortedHorns.map((number, index) => { 
        //     return <ListGroup.Item key={index}>{number}</ListGroup.Item>})

        return(
            <>
            {/* <ListGroup>{dispHorns}</ListGroup> */}
            <Form onSubmit={this.handleSubmit}>
                <Form.Label>
                    {/* //////////////////?????????? need label? */}
                </Form.Label>
                <Form.Select name='selected' onChange={this.handleSelect}>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={100}>100</option>
                </Form.Select>
            </Form>
            <Container>
                <Row>
                {this.state.sortedHorns.map((beast, index) => (
                    <HornedBeast 
                    title={beast.title}  
                    imageUrl={beast.image_url} 
                    escription={beast.description} 
                    key={index} 
                    beast={beast}
                    handleOnShow={this.props.handleOnShow}
                    />
                    ))
                }
                </Row>
            </Container>
            </>
        )
        }
}

export default Main;
