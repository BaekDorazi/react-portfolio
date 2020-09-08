import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'

class Main extends Component {
    render() {
        return (
            <div>
                <h1>리액트</h1>
                <Menu>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
                </Menu>
            </div>
        );
    }
}

export default Main;