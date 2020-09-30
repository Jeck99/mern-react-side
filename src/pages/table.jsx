import React from 'react';
import api from "../api";
import styled from 'styled-components'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import logo from "../../src/loading1.gif";

import { withAuthenticationRequired } from "@auth0/auth0-react";
const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

const TableRow = ({ rows }) => {
    return (
        rows.map(item =>
            <tbody>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.class}</td>
                <td>{item.lessons}</td>
            </tbody>)
    )
}

class UpdateStudent extends React.Component {
    updateStudent = event => {
        event.preventDefault()
        window.location.href = `/students/edit/${this.props.id}`
    }
    render() {
        return <Update onClick={this.updateStudent}>Update</Update>
    }
}

class DeleteStudent extends React.Component {
    deleteStudent = event => {
        event.preventDefault()
        if (
            window.confirm(
                `Do you want to delete  this student permanently?`,
            )
        ) {
            api.deleteStudentById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteStudent}>Delete</Delete>
    }
}
class TableData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
            columns: []
        }
    }
    componentDidMount = async () => {
        await api.getAllStudents().then(res => {
            this.setState({
                students: res.data.data
            })
        })
    }
    render() {
        const { students: students } = this.state;
        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'First Name',
                accessor: 'first_name',
                filterable: true,
            },
            {
                Header: 'Last Name',
                accessor: 'last_name',
                filterable: true,
            },
            {
                Header: 'Class',
                accessor: 'class',
                filterable: true,
            },
            {
                Header: 'Lessons',
                accessor: 'lessons',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <DeleteStudent id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell:(props)=> {
                    return (
                        <span>
                            <UpdateStudent id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!students.length) {
            showTable = false
        }
        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={students}
                        columns={columns}
                        // loading={isLoading}
                        defaultPageSize={5}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
        // return (
        //     <div>
        //         <table>
        //             <thead>
        //                 <th>first name</th>
        //                 <th>last name</th>
        //                 <th>class</th>
        //                 <th>lessons</th>
        //             </thead>
        //             {students ? <TableRow rows={students} /> : ' '}
        //         </table>
        //     </div>
        // )
    }
} 
export default withAuthenticationRequired(TableData, {
    onRedirecting: () => <div> <img width="500" height="500" src={logo} alt=" Loading ..." /></div>,
  });