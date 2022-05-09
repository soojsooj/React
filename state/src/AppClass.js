import React, { Component } from 'react'
import BoxClass  from './component/BoxClass';

export default class AppClass extends Component {

    //class component에서  state 쓰는 법
    constructor(props){
        super(props)
        this.state = {
            counter2: 0,
            num: 1,
            value: 0
        }
        console.log("constructor")
    }

    increase = () => {
        this.setState({counter2: this.state.counter2 + 1,
        value: this.state.value + 1,
        })
        console.log("increase function", this.state)
    };

    componentDidMount(){
        //API call
        console.log("componentDidMount")
    }

    componentDidUpdate(){
        console.log("componentDidMount", this.state)
    }
    render() {
        console.log("render") 
        return (
            <div>
            <div>state: {this.state.counter2}</div>
            <button onClick={this.increase}>Click!</button>
            {this.state.counter2 < 3 && <BoxClass num = {this.state.value} />}
        </div>
        )
    } 
}
