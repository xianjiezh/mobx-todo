import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { moduleName } from "../todo-store";

let value = "";
@inject(store => ({
  store: store[moduleName]
}))
@observer
class Add extends Component {
  handleClick = () => {
    this.props.store.add(value);
  };
  handleChange = e => {
    value = e.target.value;
  };
  render() {
    return (
      <>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>add</button>
      </>
    );
  }
}

export default Add;
