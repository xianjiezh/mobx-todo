import React from "react";
import { inject, observer } from "mobx-react";
import { moduleName } from "../todo-store";

@inject(store => {
  return {
    store: store[moduleName]
  };
})
@observer
class Total extends React.Component {
  render() {
    let store = this.props.store;
    console.log("store", store);
    return (
      <div>
        <div>已完成数量 :{store.finishTodosCount}</div>
        <div>总数 {store.allTodosCount}</div>
      </div>
    );
  }
}

export default Total;
