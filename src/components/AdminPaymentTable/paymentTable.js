import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';

export default function PaymentTable() {

  const [paymentList, setPaymentList] = useState([]);

  useEffect(()=>{
    let initialPaymentList = [{"suid": "1001", "rno": "3001", "exdate": "2014-09-30 00:00:00", "pdate": "2014-09-30 00:00:00", "amt": 150, "ptype": "Net Banking", "bankname": "HDFC", "tid": "624818403673"}]
    setPaymentList(initialPaymentList);
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="payment details table">
        <TableHead>
          <TableRow>
            <TableCell>Sl.no</TableCell>
            <TableCell align="center">Receipt No</TableCell>
            <TableCell align="center">Receipt Date</TableCell>
            <TableCell align="center">Due Date</TableCell>
            <TableCell align="center">Mode</TableCell>
            <TableCell align="center">Bank Name</TableCell>
            <TableCell align="center">Transaction ID</TableCell>
            <TableCell align="center">Amount Paid</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paymentList.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="center">{row.suid}</TableCell>
              <TableCell align="center">{row.pdate}</TableCell>
              <TableCell align="center">{row.exdate}</TableCell>
              <TableCell align="center">{row.ptype}</TableCell>
              <TableCell align="center">{row.bankname}</TableCell>
              <TableCell align="center">{row.tid}</TableCell>
              <TableCell align="center">{row.amt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
