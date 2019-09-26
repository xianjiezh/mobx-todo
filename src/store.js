import { observable, action } from "mobx";
import storeMgr from "./storeManage";

export const moduleName = "todos";
class Store {
  @observable
  todos = [{ id: 1, content: "lalala" }];
  @action
  add = content => {
    this.todos.push({
      id: this.todos.length + 1,
      content
    });
  };
}

storeMgr.register(moduleName, new Store());
