import  React, { Component } from 'react';

require('../css/style.css');

export default class Image extends Component {

    constructor() {
        super();
        this.state = {selected: false};
        this.oldTarget = {};
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    // 把数据分行, 每行n个
    getUlImg(imgs, n) {
        var result = [];
        for (var i = 0; i < imgs.length; i+=n) {
            var re = imgs.slice(i, i+n);
            result.push(<ul key = {i}>{re}</ul>);
        };
        return(result);
    }

    randomSort(a,b) {
        return Math.random()>.5 ? -1 : 1;
    }

    handleOnClick(evt) {
        if (this.state.selected) {
            let cc = evt.target.getAttribute('src');
            let changeSrc = this.oldTarget.getAttribute('src');
            evt.target.setAttribute('src', changeSrc);
            this.oldTarget.setAttribute('src', cc);
            this.oldTarget.setAttribute('class', '');
        } else {
            this.oldTarget = evt.target;
            this.oldTarget.setAttribute('class', 'selected');
        }

        this.state.selected = !this.state.selected;
    }

    render() {
        var imgs = this.props.data.map(function (item) {
            var src = item.value;
            return (
                <img key = {item.name} src={src} onClick = {this.handleOnClick} />
            );
        }, this);
        var imgsRandom = imgs.sort(this.randomSort);
        return (
            <div className="tab-selector">
                {this.getUlImg(imgsRandom, 8)}
            </div>
        );
    }
}