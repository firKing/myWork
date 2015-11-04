import  React, { Component } from 'react';

require('../css/style.css');

export default class Timer extends Component {
    constructor() {
        super();
        this.total = 0;
        this.tick = this.tick.bind(this);
        this.gameBegin = this.gameBegin.bind(this);
        this.clearTimer = this.clearTimer.bind(this);
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
        return(
            <div className='begin tab-selector'>
                <button onClick = {this.gameBegin}>开始计时</button>
                <button onClick = {this.clearTimer}>停止计时</button>
                <p>用时 <span id='timer'>0</span> 秒</p>
            </div>
        )
    }
}