import { toHaveAccessibleDescription } from '@testing-library/jest-dom/matchers'
import React, { Component } from 'react'

export class DeleteStudentData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         rollnotodelete:""
      }
    }
    delete=()=>{
        let matchedIndex = -1
        this.props.list.map((x,index)=>{
          if(x.roll === this.state.rollnotodelete){
            matchedIndex = index
            return
          }
        })
        if(matchedIndex!==-1){
          this.props.deleteonroll(matchedIndex)
        }else{
          alert("Roll Number not found")
        }
    }
    render() {
  
    return (
      <div>
        <label>Enter the roll No to Delete : </label>
        <input value={this.state.rollnotodelete} onChange={(e)=>{this.setState({rollnotodelete:e.target.value})}}/><br></br>
        <button onClick={this.delete}>Delete</button>
      </div>
    )
  }
}

export default DeleteStudentData