import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from "../api";


export default class BasicTable extends React.Component {
constructor(props){
    super(props)
    this.state={
        rows:[]
    }
}
    componentDidMount = async () => {
        await api.getAllStudents().then(res => {
            this.setState({
                rows: res.data.data
            })
        })
    }   
     render() {
        const { rows: rows } = this.state;
        return (
            <TableContainer component={Paper}>
                <Table stickyHeader className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Class</TableCell>
                            <TableCell align="right">Lessons</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell >{row.first_name}</TableCell>
                                <TableCell align="right">{row.last_name}</TableCell>
                                <TableCell align="right">{row.student_class}</TableCell>
                                <TableCell align="right">{row.lessons}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

}