import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
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


    render() {
        return (
            <>
            <h2>{this.props.title}</h2>
            <img src={this.props.imageUrl}  alt={this.props.description} title={this.state.title}/>
            <p>{this.props.description}</p>
            <p>a heart {this.state.hearts}</p>
            <Button onClick={this.handleHearts}>Click here to give these beasts love!</Button>
            {/* <Button */}
            </>
        )
    }
}

export default HornedBeast;
