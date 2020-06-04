import React, {Component} from 'react';
import MenuElement from './MenuElement'
import './TopMenu.css';

class TopMenu extends Component {
    static defaultProps = {
        elements: [
            {name: 'Gallery', isImage: false},
            {name: 'Stories', isImage: false},
            {name: 'Profile.jpeg', isImage: true}
        ]
    }
    render() {
        return (
            <div className="TopMenu">
                {this.props.elements.map((e) => (
                        <MenuElement name={e.name} isImage={e.isImage} />
                ))}
            </div>
        );
    }
}

export default TopMenu