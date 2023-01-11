import React from 'react';

class HornedBeast extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hearts: 0,
            // beenHearted: false

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
            <p onClick={this.handleHearts}>Click here to give these beasts love!</p>
            </>
        )
    }
}

export default HornedBeast;
