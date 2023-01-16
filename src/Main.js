import React from 'react';
import HornedBeast from './HornedBeast';
import { Container, Row } from 'react-bootstrap';

class Main extends React.Component {
    render() {
        let beastArray = [];
        this.props.data.forEach((newBeast, index) => {
            beastArray.push(
                <HornedBeast title={newBeast.title}  imageUrl={newBeast.image_url} description={newBeast.description} key={index} 
                // handleOnShow={this.props.handleOnShow} 
                />
            )
        })
        return(
            <>
            <Container>
                <Row>
                {this.props.data.map((beast, index) => (
                    <HornedBeast title={beast.title}  imageUrl={beast.image_url} description={beast.description} key={index} />
                    ))
                }
                </Row>
            </Container>
            </>
        )
        }
}
export default Main;
