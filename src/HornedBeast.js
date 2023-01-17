import { Button, Card } from 'react-bootstrap';
import React from 'react';


class HornedBeast extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hearts: 0,
        }
    }

    handleHearts = () => {
        this.setState({
            hearts: this.state.hearts + 1,
        })
    }

    clickHandleOnShow = () => {
        this.props.handleOnShow(this.props.title, this.props.imageUrl, this.props.description)
    };

    render() {
        return (
            <>
            <Card style={{width:'30%'}}>
                <h2>{this.props.title}</h2>
                <Card.Img style={{width: '100%'}} src={this.props.imageUrl}  alt={this.props.description} title={this.state.title} onClick={this.clickHandleOnShow}/>
                <p>{this.props.description}</p>
                <p>💖{this.state.hearts}</p>
                <Button onClick={this.handleHearts}>Click here to give these beasts love!
                </Button>
            </Card>
            </>
        )
    }
}

export default HornedBeast;
