import { observable, action, computed} from 'mobx'
import storeMgr from './storeManage'

export const moduleName = 'todos'


class Store {
  @observable
  todos = [{id:1, content: 'lalala', done: false}];
  createId = () => {
    return new Date().getTime()
  }
  @action
  add = (content) => {
    this.todos.push({
      id: this.createId(),
      content,
      done: false,
    })
  }
  @action
  remove = (id) => {
    console.log('id', id)
    this.todos = this.todos.filter(todo => {
      return todo.id !== id
    })
    console.log(this.todos)
  }
  @action
  finish = (id) => {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.done = true
      }
      return todo
    })
  }
  @computed get finishTodosCount() {
    let count = 0
    this.todos.forEach(todo => {
      if (todo.done) {
        count += 1
      }
    })
    return count
  }
  @computed get allTodosCount() {
    return this.todos.length
  }
}

storeMgr.register(moduleName, new Store())