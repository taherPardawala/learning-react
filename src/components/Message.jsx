import { Component } from "react";

class Message extends Component {

    constructor() {
        super();

        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        const { messageContent } = this.props
        return  <>
            <h1>This is a class component {messageContent} - {this.state.counter} </h1>
            <button onClick={this.increment}>Increment</button>
        </>
    }
}

export default Message;