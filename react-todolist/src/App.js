import React, { Component } from 'react';
import './App.css';

class TodoItem extends Component{
  constructor(props) {
    super(props);
    this.state = {todoList:[]};
    this.add = this.add();
  }
  add(todo){
    this.state.todoList.push({todo:false});
  }
  render() {
    if(this.state.todoList.length===0){
      return (
        <div>無待辦事項
          <AddItem todolist={this.state.todoList} />
        </div>
      );
    }else{
      return (
        <div>待辦清單
          <AddItem todolist={this.state.todoList} />
        </div>
      );
    }
  }
}
class AddItem extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    let todo = this.state.value;
    alert('新增事項 ' + todo);
    event.preventDefault();
    // this.props.addlist(this.state.value);
    this.props.todoList.push({todo:false});
    // this.props.todolist.push({todo:false});
    alert(this.props.todolist);
    event.preventDefault();
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          事項:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="button" value="新增" onClick={this.handleSubmit}/>
      </form>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="todoList">
        <TodoItem />
      </div>
    );
  }
}

export default App;
