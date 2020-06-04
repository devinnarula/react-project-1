import React, {Component} from 'react';
import './Option.css';

class Option extends Component {
    render() {
        let ClassT = 'Option'
        if(this.props.name === 'Popular'){
            ClassT = 'Option-Clicked'
        }
        return (
            <h1 className={ClassT}>{this.props.name}</h1>
        );
    }
}

export default Option