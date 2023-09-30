import React, { Component } from 'react'

export class Addfn extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:"",
            roll:"",
            marks:"",
            list:[]
        }
    }
    submit=()=>{
        const {name,roll,marks}=this.state
        this.setState({
            list:[{name:name,rollno:roll,marks:marks}]
        },
        ()=>{
            this.props.finallist(this.state.list)
        })
    }
  render() {
    const {name,roll,marks}=this.state
    return (
      <div>
        <label>Name</label>
        <input value={name} onChange={(e)=>{this.setState({name:e.target.value}) }}/><br></br>
        <label>Roll NO</label>
        <input value={roll} onChange={(e)=>{this.setState({roll:e.target.value}) }}/><br></br>
        <label>Marks:</label>
        <input value={marks} onChange={(e)=>{this.setState({marks:e.target.value}) }}/><br></br>
        <button onClick={this.submit}>Submit</button>
      </div>
    )
  }
}

export default Addfn
