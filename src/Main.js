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

            {/* <HornedBeast  title={title}  imageUrl="w.fakelink.com" description="fakeAF" key=index />
            <HornedBeast  title="TitleTwo"  imageUrl="w.fakelink2.com" description="fakeAFToo"/> */}

            </>
        )
        }
    
}
export default Main;
