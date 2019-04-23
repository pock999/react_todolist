import React, { Component } from 'react';
import './App.css';
function TodoThing(thing, fulfill) {
  this.thing = thing;
  this.fulfill = fulfill;
}
function finishClass(fulfill){
  if(fulfill){
    return 'done';
  }else{
    return 'todo';
  }
}
// const List = ({ list, onDelete }) => (
//   <ul>
//     {list.map((item, idx) => (
//       <li>
//         {item} ---
//         <span className="delete" onClick={() => onDelete(idx)}>
//           delete
//         </span>
//       </li>
//     ))}
//   </ul>
// );
class List extends React.Component {
  render(){
    return (
      <ul>
        {/* this.props 為其他地方使用List組件時候，所傳進來的參數 */}
      {this.props.list.map((item, idx) => (
       <li>
         {idx} : {item.thing}-->
         <span className={finishClass(item.fulfill)} onClick={() => this.props.onFinish(idx)}>
              finish
         </span>
         --/--           
         <span className="delete" onClick={() => this.props.onDelete(idx)}>
           delete
         </span>
       </li>
     ))}
   </ul>
    );
  }
}
class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      list: [{thing:"吃飯",fulfill:false}, {thing:"睡覺",fulfill:false}, {thing:"打東東",fulfill:false}]
    };

    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.finishTodo = this.finishTodo.bind(this);
  }
  finishTodo(idx){
    let finishCopy = this.state.list;
    console.log("finishCopy=>",finishCopy)
    finishCopy[idx].fulfill=!finishCopy[idx].fulfill
    this.setState({ list:finishCopy });
    
  }
  handleInput(event) {
    //使input內的值可以被更改 
    this.setState({ input: event.target.value });
  }
  addTodo() {
    // 語法:updatedList = [...原先的ary,新增的值]
    // const updatedList = [...this.state.list, this.state.input];
    const updatedList = [...this.state.list, new TodoThing(this.state.input,false)];
    // 更新state的方式 ==> this.setState({屬性一:更新的屬性值,屬性二:更新的屬性值});
    this.setState({ list: updatedList, input: "" });
  }
  deleteTodo(idx) {
    // 這裡的意思是只留下index不等於傳進來要刪除的idx的項目，也就是過濾掉idx的項目
    const filter = (  item, index) => index !== idx;
    const updatedList = this.state.list.filter(filter);
    // 也能寫成==>const updatedList = this.state.list.filter((item, index) => index !== idx);
    this.setState({ list: updatedList });
  }

  render() {
    const { input, list } = this.state;

    return (
      <div>
        {/* 使input內的值可以被更改，因為這裡的value原先已經固定給state的屬性，在這裡使期變成雙向繫結*/}
        <input value={input} onChange={this.handleInput} />

        <button onClick={this.addTodo}>add</button>
        {/* 在List 內可以使用this.props.list呼叫到list，使用this.props.onDelet可以呼叫到deleteTodo */}
        <List list={list} onDelete={this.deleteTodo} onFinish={this.finishTodo}/>
      </div>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <div className="todoList">
        <Todo/>
      </div>
    );
  }
}

export default App;
