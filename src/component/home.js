import React, { Component } from 'react';
export default class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  addRow = () => {
    const newRow = {
        index:this.state.rows.length,
        id :this.state.rows.length + 1,
      item: '', 
      createdAt: new Date().toLocaleTimeString(),
    };
    this.setState((prevState) => ({
      rows: [...prevState.rows, newRow],
      currentId: prevState.currentId + 1,
    }));

  };
  addRowstart = () => {
    const newRow = {
        index:this.state.rows.length,
        id :this.state.rows.length + 1,
      item: '', 
      createdAt: new Date().toLocaleTimeString(),
    };
    this.setState((prevState) => ({
      rows: [newRow,...prevState.rows],
    }));
  };
  handleItemChange = (event, index) => {
    const updatedRows = this.state.rows.map((row) =>
      row.index === index ? { ...row, item: event.target.value } : row
    );
    this.setState({ rows: updatedRows });
  };

  sortByIndexAscending = () => {
    const sortedRows = [...this.state.rows].sort((a, b) =>
      a.index - b.index
    );
    this.setState({ rows: sortedRows });
  };

  sortByIndexDescending = () => {
    const sortedRows = [...this.state.rows].sort((a, b) =>
      b.index - a.index
    );
    this.setState({ rows: sortedRows });
  };
  render() {
    return (
      <div className='global-container'>
        
        <div className='intial-buttons-container'>
            <button onClick={this.addRowstart}>Add new to The Start</button>
            <button onClick={this.addRow}>Add new to The End</button>
            <button onClick={this.sortByIndexAscending}> sort to The Earliest</button>
            <button onClick={this.sortByIndexDescending}>sort to The Latest</button>
        </div>
        <div className='main-container'>
          <table>
            <thead>
              <tr>
                <th>Index</th>
                <th>ID</th>
                <th>Item</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {this.state.rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.index}</td>
                  <td>{row.id}</td>
                  <td>
                    <input
                      type="text"
                      value={row.item}
                      onChange={(event) => this.handleItemChange(event, row.index)}
                    />
                  </td>
                  <td>{row.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}