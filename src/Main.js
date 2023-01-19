import React from 'react';
import HornedBeast from './HornedBeast';
import { Container, ListGroup, Row, Form } from 'react-bootstrap';

class Main extends React.Component {

    render() {
        let dispHorns = this.props.sortedHorns.map((number, index) => { 
            return <ListGroup.Item key={index}>{number}</ListGroup.Item>})
        return(
            <>
            <ListGroup>{dispHorns}</ListGroup>
            <Form onSubmit={this.handleSubmit}>

            </Form>
            <Container>
                <Row>
                {this.props.data.map((beast, index) => (
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
