import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

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
            {beastArray}

            </>
        )
        }
    
}
export default Main;
