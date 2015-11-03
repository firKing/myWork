import  React, { Component } from 'react';

require('../css/style.css');

export default class Image extends Component {

    constructor() {
        super();
        this.state = {selected: false};
        this.oldTarget = {};
        this.handleOnClick = this.handleOnClick.bind(this);

        this.c = 0;
        this.t = null;
        this.gameBegin = this.gameBegin.bind(this);
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

    Print() {
        console.log("我在打印!");  
        this.t = setTimeout(this.Print(),1000);//开始计时器,调用自己,进行无穷循环  
    }
    // var timer;//该值表示要取消延迟执行的代码块
  
            //开始打印
  
    gameBegin() {  
        this.Print();    //调用打印方法
    }  
  
            //结束打印  
  
    StopPrint() {  
        clearTimeout(this.t);    //取消计时器
    }  

    render() {
        var imgs = this.props.data.map(function (item) {
            var src = item.value;
            return (
                <img key = {item.name} src={src} onClick = {this.handleOnClick} />
            );
        }, this);

        var imgsRandom = imgs.sort(this.randomSort);

        var beginButton = (<button onClick = {this.gameBegin}>游戏开始</button>);

        return (
            <div className="tab-selector">
                <div className='begin'>{beginButton}<p id='timer'>0</p></div>
                {this.getUlImg(imgsRandom, 8)}
            </div>
        );
    }
}