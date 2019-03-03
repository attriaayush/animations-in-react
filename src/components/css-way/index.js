import React, {Component} from "react";
import './index.css';

export default class CssExample extends Component {
    onClickHandle = () => {
        const wrapper = document.getElementById('wrapper');
        wrapper.classList.toggle('open-nav');
    }
    render() {
        return (
            <div id="wrapper" className="wrapper">
                <div className="nav">
                    <div className="nav-icon" 
                    onClick={() => this.onClickHandle()}>
                    <div className="icon" />
                    </div>
                    <div className="nav-body">
                    Navigation <br/>
                    Menu
                    </div>
                </div>
            </div>
        )
    }
}