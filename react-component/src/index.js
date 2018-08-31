import * as React from "react";
import { Component } from 'react';

class ReactComponent extends Component {
  constructor() {
    super();
    this.state = { someKey: 'Initial value' };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'I am an external component' });
  }
}

export default ReactComponent;
