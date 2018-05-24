import React,{Component} from 'react';
import Page1 from './Page/Page1/Page1';
import Page2 from './Page/Page2/Page2';

export default class Welcome extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <Page1 {...this.props} id="page_1_0"/>
                <Page2 {...this.props} id="page_2_0"/>
                <Page2 {...this.props} id="page_3_0"/>
            </div>
        )
    }
}