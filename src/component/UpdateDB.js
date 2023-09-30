import React, { Component } from 'react';

export class UpdateDB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rolltoupdate: "",
            rollstatus: 1,
            name1: "",
            rollno1: "",
            marks1: "",
            index1: -1, // Initialize with -1 to indicate no index
        };
    }

    check = () => {
        let matchFound = false; // Flag to track if a match is found
        this.props.list.forEach((x, index) => {
            if (x.rollno === this.state.rolltoupdate) {
                this.setState({
                    rollstatus: 2,
                    name1: x.name,
                    rollno1: x.rollno,
                    marks1: x.marks,
                    index1: index,
                });
                matchFound = true; // Set the flag to true if a match is found
            }
        });

        if (!matchFound) {
            this.setState({
                rollstatus: 3,
            });
        }
    };

    update = () => {
        const { name1, rollno1, marks1, index1 } = this.state;
        this.props.updatelist(name1, rollno1, marks1, index1);
        alert("Updated successfully");
    };

    render() {
        let h1 = "";
        if (this.state.rollstatus === 2) {
            const { name1, marks1, rollno1 } = this.state;
            h1 = (
                <>
                    <br />
                    <label>Name</label>
                    <input
                        value={name1}
                        onChange={(e) => {
                            this.setState({ name1: e.target.value });
                        }}
                    />
                    <br />
                    <label>RollNo</label>
                    <input
                        value={rollno1}
                        onChange={(e) => {
                            this.setState({ rollno1: e.target.value });
                        }}
                    />
                    <br />
                    <label>Marks</label>
                    <input
                        value={marks1}
                        onChange={(e) => {
                            this.setState({ marks1: e.target.value });
                        }}
                    />
                    <br />
                    <button onClick={this.update}>Update</button>
                </>
            );
        } else if (this.state.rollstatus === 3) {
            h1 = "Roll No Does Not Exist";
        } else {
            h1 = "";
        }
        return (
            <div>
                <label>Enter RollNo To Update</label>
                <input
                    value={this.state.rolltoupdate}
                    onChange={(e) => {
                        this.setState({
                            rolltoupdate: e.target.value,
                            rollstatus: 1, // Reset status when input changes
                        });
                    }}
                />
                <button onClick={this.check}>Submit</button>
                {h1}
            </div>
        );
    }
}

export default UpdateDB;
