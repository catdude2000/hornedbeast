import React from 'react';
import HornedBeast from './HornedBeast';
import { Container, Row } from 'react-bootstrap';

class Main extends React.Component {
    render() {
        return(
            <>
            <Container>
                <Row>
                {this.props.data.map((beast, index) => (
                    <HornedBeast title={beast.title}  
                    imageUrl={beast.image_url} 
                    escription={beast.description} 
                    key={index} />
                    ))
                }
                </Row>
            </Container>
            </>
        )
        }
}

export default Main;
