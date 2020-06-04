import React, {Component} from 'react'
import './MainScreen.css';

class MainScreen extends Component {
    static defaultProps = {
        imgsrc: require('./img/MainScene.jpg'),
        mainCaption: 'The most beatiful places in the world!',
        subCaption: 'Plan your vacation on the most beatiful places in the world',
        title: 'TooTravel'
    }
    render() {
        return (
            <div className='MainScreen-Container'>
                 <img className='MainScreen-Image' src={this.props.imgsrc} />
                <div className='MainScreen-TitleContainer'>
                    <h1 className='MainScreen-Title'>{this.props.title}</h1>
                </div>
                <div className='MainScreen-InsideContainer'>
                    <h1 className='MainScreen-H1'>{this.props.mainCaption}</h1>
                    <h2 className='MainScreen-H2'>{this.props.subCaption}</h2>
                    <h3 className='MainScreen-GetStarted'>Get Started</h3>
                </div>
            </div>
        );
    }
}

export default MainScreen