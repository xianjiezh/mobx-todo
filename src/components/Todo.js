import React from "react";
import { inject, observer } from "mobx-react";
import { moduleName } from "../todo-store";

@inject(store => {
  return {
    store: store[moduleName]
  };
})
@observer
class Todo extends React.Component {
  deleteTodo(id) {
    let store = this.props.store;
    store.remove(id);
  }
  finishTodo(id) {
    let store = this.props.store;
    store.finish(id);
  }
  render() {
    let todos = this.props.store.todos;
    return (
      <>
        {todos.map(item => (
          <li key={item.id} className={item.done ? "done" : ""}>
            <div>{item.content} </div>
            <div
              onClick={this.finishTodo.bind(this, item.id)}
              className="finish-button"
            >
              {item.done ? "已完成" : "待完成"}
            </div>
            <div
              onClick={this.deleteTodo.bind(this, item.id)}
              className="delete"
            >
              x
            </div>
          </li>
        ))}
      </>
    );
  }
}

export default Todo;
