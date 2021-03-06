/**
 * Navigation menu item component
 * Written by: Jason Love
 */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

/**
 * Return navigation menu item component
 */
class NavigationMenuItem extends Component {
    render() {
        let imgURL = "../assets/image/" + this.props.img;
        let endpoint = (this.props.value === "home page") ? "/" : `/${this.props.value}`;

        const notifBubbleStyle = {
            position: "absolute",
            marginTop: -20,
            marginLeft: 33,
            backgroundColor: "red",
            width: 12,
            height: 12,
            borderRadius: 12,
            border: "1px solid white",
            zIndex: 100,
            visibility: this.props.showNotifBubble ? 'visible' : 'hidden'
        };

        return (
            <NavLink exact to={endpoint} className="nav-item">
                <img src={imgURL} alt={this.props.value} className="nav-icon" />
                <div style={notifBubbleStyle} />
                <div className="nav-label">{this.props.value}</div>
            </NavLink>
        );
    }
}

export default NavigationMenuItem;