import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import { Container, Row, Col } from 'react-bootstrap';

class Main extends React.Component {
    render() {

        let beastArray = [];
        data.forEach((newBeast, index) => {
            beastArray.push(
                <HornedBeast title={newBeast.title}  imageUrl={newBeast.image_url} description={newBeast.description} key={index} />
            )
        })


        return(
            <>
            <Container>
                <Row>
                    <Col>
                        {beastArray}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {beastArray}
                    </Col>
                </Row>
            </Container>
            

            </>
        )
        }
    
}
export default Main;
