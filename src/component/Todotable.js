import React, { Component } from 'react'

export class Todotable extends Component {
  render() {
    return (
        <tbody>
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.id}</td>
                <td><input/></td>
                <td>{this.props.createAt}</td>

            </tr>
        </tbody>
     
    )
  }
}

export default Todotable
