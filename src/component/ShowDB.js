import React, { Component } from 'react'

export class ShowDB extends Component {
  render() {
    return (
      <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Roll NO</th>
                    <th>Marks</th>
                </tr>
            </thead>
            <tbody>
                {this.props.list.map(x=>(
                    <tr key={x.rollno}>
                        <td>{x.name}</td>
                        <td>{x.rollno}</td>
                        <td>{x.marks}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    )
  }
}

export default ShowDB
