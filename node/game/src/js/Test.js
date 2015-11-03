import React, { Component } from 'react';

export default class Test extends Component {
    constructor() {
        super();
        this.state = {liked: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({liked: !this.state.liked});
    }

    render() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
          <p onClick={this.handleClick}>
            You {text} this. Click to toggle.
          </p>
        );
    }
}