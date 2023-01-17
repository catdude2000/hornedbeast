import React from 'react';
import HornedBeast from './HornedBeast';
import { Container, Row } from 'react-bootstrap';

class Main extends React.Component {

clickHandleOnShow = () => {
    this.props.handleOnShow();
        // this.props.title, 
        // // this.props.imageUrl, 
        // this.props.description,
        // console.log(this.props.title, this.props.description, 'title and description'))
};

    render() {
        return(
            <>
            <Container>
                {/* onClick={this.clickHandleOnShow} */}
                <Row>
                {this.props.data.map((beast, index) => (
                    <HornedBeast 
                    title={beast.title}  
                    imageUrl={beast.image_url} 
                    escription={beast.description} 
                    key={index} 
                    // onClick={this.props.clickHandleOnShow}
                    handleOnShow={this.clickHandleOnShow}
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
