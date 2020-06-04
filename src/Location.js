import React, {Component} from 'react';
import './Location.css';

class Location extends Component {
    render() {
        let img = require(`./img/${this.props.name}.jpg`);
        console.log(img);
        return (
            <div className='Location-Container'>
                <img className='Location-Image' src={img} alt="Location"/>
                <div className='Location-InsideContainer'>
                    <h1 className='Location-H1'>{this.props.name}</h1>
                    <h2 className='Location-H2'>{this.props.number} must see places</h2>
                </div>
                <h1 className='Location-Rating'>{this.props.rating}</h1>
            </div>
        );
    }
}

export default Location