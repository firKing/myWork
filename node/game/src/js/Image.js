import  React, { Component } from 'react';

require('../css/style.css');

export default class Image extends Component {

    constructor() {
        super();
        this.state = {selected: false};
        this.oldTarget = {};
        this.handleOnClick = this.handleOnClick.bind(this);

        this.total = 0;
        this.tick = this.tick.bind(this);
        this.gameBegin = this.gameBegin.bind(this);
        this.clearTimer = this.clearTimer.bind(this);
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

    // 处理图片点击事件
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

    //计时器
    tick() {
        let p = document.getElementById('timer');
        p.innerHTML = this.total;
        this.total += 1;
    }

    // 游戏开始, 开始计时
    gameBegin() {
        this.total += 1;
        this.interval = setInterval(this.tick, 1000);
    }

    // 终止计时
    clearTimer() {
         clearInterval(this.interval);
    }

    render() {
        var imgs = this.props.data.map(function (item) {
            var src = item.value;
            return (
                <img key = {item.name} src={src} onClick = {this.handleOnClick} />
            );
        }, this);

        var imgsRandom = imgs.sort(this.randomSort);

        var beginButton = (<button onClick = {this.gameBegin}>开始计时</button>);

        var endButton = (<button onClick = {this.clearTimer}>停止计时</button>)

        return (
            <div className="tab-selector">
                <div className='begin'>{beginButton}{endButton}<p>用时 <span id='timer'>0</span> 秒</p></div>
                {this.getUlImg(imgsRandom, 8)}
            </div>
        );
    }
}