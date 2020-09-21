import React, { Component } from 'react'
import Btn from "./Button" 
export default class TodoItem extends Component {
  //index={index+1} data={element} click={this.props.complete(index)} delete={this.props.delete} edit={this.props.edit}
  
  render() {
    console.log(this.props)
    const {index,completeTodo,editTodo} = this.props
    const {text,complete,date,edit} = this.props.data

    return (
      <>
         <span>{index+1}. {text} | {complete.toString()} | {new Date(date).toString()}</span>
            <Btn onClick={this.props.removeTodo}>
              <span role="img" aria-label="delete">🗑️</span>
            </Btn>
            <Btn onClick={() => editTodo(index)}>
            <span role="img" aria-label="edit">✏️</span>
            </Btn>
            <Btn onClick={()=>completeTodo(index)}>
              {complete ? <span role="img" aria-label="uncomplete">❌</span> : <span role="img" aria-label="complete">✔️</span>}
            </Btn>
      </>
    )
  }
}
