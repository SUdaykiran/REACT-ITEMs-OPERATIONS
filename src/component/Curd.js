import React, { Component } from 'react'
import Addfn from './Addfn'
import ShowDB from './ShowDB'
import UpdateDB from './UpdateDB'
import DeleteStudentData from './DeleteStudentData'
export class Curd extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
            addbool:false,
            seebool:false,
            updatebool:false
        }
    }
    finallist=(listfinal)=>{
        this.setState({
            list:[...listfinal,...this.state.list],
            addbool:false
        },()=>{
            console.log(this.state.list)
        })
    }
    addfn=()=>{
        this.setState({
            addbool:true,
            seebool:false,
            updatebool:false
        })
    }
    seefn=()=>{
            this.setState({
                seebool:true,
                addbool:false,
                updatebool:false
            })
    }
    updatefn=()=>{
        this.setState({
            updatebool:true,
            addbool:false,
            seebool:false
        })
    }
    updatelist=(name,roll,marks,index)=>{
        this.state.list[index].name=name
        this.state.list[index].rollno=roll
        this.state.list[index].marks=marks
    }
    delete=()=>{
        this.setState({
          addbool:false,
          seebool:false,
          updatebool:false,
          deletebool:true,
        })
      }
    deleteonroll=(index)=>{
        const updatedlist = [...this.state.list]
        updatedlist.splice(index,1)
        this.setState({list:updatedlist})
        alert("Deleted Successfully")
      }
  render() {
    return (
      <div>
        <div className='uday'>
        Student Result Management<br></br>
        <button onClick={this.addfn}>Add</button>
        <button onClick={this.seefn}>See Database</button>
        <button onClick={this.updatefn}>Update</button>
        <button onClick={this.delete}>Delete</button>
        {this.state.addbool?<Addfn finallist={this.finallist}/>:""}
        {this.state.seebool?<ShowDB list={this.state.list}/>:""}
        {this.state.updatebool?<UpdateDB list={this.state.list} updatelist={this.updatelist}/>:""}
     {this.state.deletebool?<DeleteStudentData list={this.state.list} deleteonroll={this.deleteonroll}/>:""}
      </div>
      </div>
    )
  }
}

export default Curd
