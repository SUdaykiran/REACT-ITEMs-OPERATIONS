import React, { Component } from 'react'
import Todotable from './Todotable'
export class Todo extends Component {
    constructor(props)
    {
        super(props)
        const date=new Date()
        const count=1
        this.state={
            counter:count,
            list:[{id:count,createAt:date}]
        }
    }
    addFornt=()=>{
        const date=new Date()
        this.setState({
            counter:this.state.counter+1,
            list:[{id:this.state.counter+1,createAt:date},...this.state.list]
        })
    }
    addBack=()=>{
        const date=new Date()
        this.setState({
            counter:this.state.counter+1,
            list:[{...this.state.list,id:this.state.counter+1,createAt:date},]
        })
    }
  render() {
    return (
      <div>
        <button onClick={this.addFornt}>fornt</button>
        <button onClick={this.addBack}>back</button>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Index</th>
                    <th>Item</th>
                    <th>createdAt</th>
                </tr>
            </thead>

      </table>
      {this.state.list.map((x,index)=>
      <Todotable index={index} id={x.id} createAt={x.createAt.toLocaleTimeString()}/>
      )}
      </div>
    )
  }
}

export default Todo