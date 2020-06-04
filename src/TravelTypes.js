import React, {Component} from 'react'
import TType from './TType'
import './TravelTypes.css';

class TravelTypes extends Component {
    static defaultProps = {
        types: [
            {symbol: '✈', name: 'Air'},
            {symbol: '👱‍♂️', name: 'Solo'},
            {symbol: '⭐️', name: 'Luxury'},
            {symbol: '🦁', name: 'Safari'},
            {symbol: '🍔', name: 'Food'},
        ]
    }
    render() {
        return (
            <div>
                <h1 className='TravelTypes-Heading'>Types of Travel</h1>
                <div className='TravelTypes-Types'>
                    {this.props.types.map((t) => (
                            <TType symbol={t.symbol} name={t.name} />
                    ))}
                </div>
            </div>
        );
    }
}

export default TravelTypes