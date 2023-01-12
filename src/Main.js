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
                {data.map((beast, index) => (
                    // <Col>
                         <HornedBeast style={{width:'30%'}} title={beast.title}  imageUrl={beast.image_url} description={beast.description} key={index} />
                    // </Col>
                ))}
                </Row>
            </Container>
            

            </>
        )
        }
    
}
export default Main;
