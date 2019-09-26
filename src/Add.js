import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { moduleName } from "./todo-store";

@inject(store => ({
  store: store[moduleName]
}))
@observer
class Add extends Component {
  handleClick = () => {
    this.props.store.add("xxx");
  };
  render() {
    return <button onClick={this.handleClick}>add</button>;
  }
}

export default Add;
