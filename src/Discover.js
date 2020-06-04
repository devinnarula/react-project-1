import React, {Component} from 'react'
import Location from './Location'
import Option from './Option'
import './Discover.css';

class Discover extends Component {
    static defaultProps = {
        places: [
            {rating: 4.9, name: 'Iceland', number: 52},
            {rating: 4.7, name: 'Alaska', number: 28},
            {rating: 5.0, name: 'Arizona', number: 35}
        ],
        options: [
            {name: 'Popular'},
            {name: 'Adeventure'},
            {name: 'Tour'}
        ]
    }
    render() {
        return (
            <div>
                <h1 className='Discover-Heading'>Discover</h1>
                <div className='Discover-Options'>
                    {this.props.options.map((o) => (
                            <Option name={o.name} />
                    ))}
                </div>
                <div className='Discover-Places'>
                    {this.props.places.map((p) => (
                            <Location rating={p.rating} name={p.name} number={p.number} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Discover