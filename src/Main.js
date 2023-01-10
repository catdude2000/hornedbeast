import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
    render() {
        return(
            <>

            <HornedBeast  title="TitleOne"  imageUrl="w.fakelink.com" description="fakeAF"/>
            <HornedBeast  title="TitleTwo"  imageUrl="w.fakelink2.com" description="fakeAFToo"/>
            </>
        )
        }
    
}
export default Main;