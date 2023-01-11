import React from 'React';

class HornedBeast extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            likes: 0,

        }
    }

    handleHearts = () => {
        this.setState({
            likes: this.state.likes + 1,
        })
    }


    render() {
        return (
            <>
            <h2>{this.props.title}</h2>
            <img src={this.props.imageUrl}  alt={this.props.description} title={this.state.title}/>
            <p></p>
            
            </>
        )
    }
}

export default HornedBeast;
