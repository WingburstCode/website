import React, { Component } from 'react';
import Header from './Header';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      timer: 0
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    const items = [];
    for (let i = 0; i < this.state.timer; ++i) {
      items.push(<li>{i * 10}</li>);
    }

    return (
      <div>
        <ul>
          {items}
        </ul>
        <Header text={'Hello'} />
        <Header text={'It\'s Me'} />
        <div>
          <span>Count: {this.state.count}</span>
          <button onClick={this.handleClick.bind(this)}>Click Me</button>
        </div>

        <div>Timer: {this.state.timer}</div>
      </div>
    );
  }
}

export default Home;
