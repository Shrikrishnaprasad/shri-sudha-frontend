import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TextField from '@mui/material/TextField';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const rows = [{
  reportTakenDate: "2021-12-31", count: "2345"
}]

export default function Support() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Report take date</TableCell>
            <TableCell align="left">count</TableCell>
            <TableCell align="left">Posted date</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row" sx={{fontSize: "20px"}}>
                {row.reportTakenDate}
              </TableCell>
              <TableCell align="left" sx={{fontSize: "20px"}}>{row.count}</TableCell>
              <TableCell align="left">
                <TextField
                  type="date"
                  color="secondary"
                  fullWidth
                  required
                />
              </TableCell>
              <TableCell align="center">
                <Button variant="contained" fullWidth color="secondary" sx={{padding: 2}}>Submit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
