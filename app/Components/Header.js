import React, { Component, PropTypes } from 'react';
import './Header.less';

class Header extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }
  render() {
    return <h1 className="header">{this.props.text}</h1>;
  }
}

export default Header;
