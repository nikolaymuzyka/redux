import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, refresh } from './AC';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    handlerInput = (e) => {
        this.setState({
            count: e.target.value
        })
        console.log(this.state.count);
    }

    handlerIncrement = () => {
        this.props.increment(parseInt(this.state.count));
        document.getElementById('inputField').value = '';
    }

    handlerDecrement = () => {
        this.props.decrement(parseInt(this.state.count));
        document.getElementById('inputField').value = '';
    }

    handlerRefresh = () => {
        this.props.refresh();
        document.getElementById('inputField').value = '';

    }

    render() {
        return (
            <div>
                {this.props.counter}
                <br/>
                {this.props.procedure}
                <br/>
                <input id="inputField" type="text" placeholder="enter value" onChange={this.handlerInput} />
                <button onClick= {this.handlerIncrement}>increment</button>
                <button onClick= {this.handlerDecrement}>decrement</button>
                <br/>
                <button onClick={this.handlerRefresh}>refresh</button>
            </div>
        )
    }

}

function mapStateToProps (state) {
    return {
        counter: state.counter,
        procedure: state.procedure

    }
}

const dispathToProps = { increment, decrement, refresh }

export default connect(mapStateToProps, dispathToProps)(App);
