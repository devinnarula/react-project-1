import React, {Component} from 'react';
import './MenuElement.css';

class MenuElement extends Component {
    render() {
        if(this.props.isImage){
            let imgSrc = require(`./img/${this.props.name}`);
            return (
                <img className='MenuElement-Image' src={imgSrc} />
            );
        }
        return (
            <h1 className='MenuElement-Text'>{this.props.name}</h1>
        );
    }
}

export default MenuElement