import React from "react";
import ReactDOM from "react-dom";
import { inject, observer, Provider } from "mobx-react";
import storeMgr from "./storeManage.js";
import Todo from "./components/Todo";
import Add from "./components/Add";
import Total from "./components/Total";
import "./styles.css";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Add />
        <Todo />
        <Total />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
const store = storeMgr.getStores();
ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  rootElement
);
