import React, {Component} from 'react';
import './TType.css';

class TType extends Component {
    render() {
        let classN = 'TType';
        if (this.props.name === 'Air') {
            classN='TType-Clicked'
        }
        return (
            <div className={classN} >
                <h1 className='TType-Symbol'>{this.props.symbol}</h1>
                <h2 className='TType-Name'>{this.props.name}</h2>
            </div>
        );
    }
}

export default TType