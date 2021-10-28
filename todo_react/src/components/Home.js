import React, { Component } from 'react'
import Menu from './Menu'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        let path = this.props.match.path
        return (
            <div>
                {/*Home 组件中调用 Menu 组件*/}
                <Menu path={path}/>
                {/*<div className='clock'>{this.state.date.toLocaleTimeString('en-US')}.</div>*/}
                <div className="heading">
                    <img className="heading__img" src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg'/>
                    <h1 className="heading__title">To-Do List</h1>
                </div>
                <div className='clock'>{this.state.date.toLocaleTimeString('en-US')}.</div>
                <div className='slogan'>reading and running</div>
            </div>
        )
    }
}

export default Home
