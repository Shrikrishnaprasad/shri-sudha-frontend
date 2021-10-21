import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PaymentTable from '../../../components/AdminPaymentTable/paymentTable'
import '../AdminMain.scss';
import AdminRow from 'components/AdminRow/AdminRow';

const tableRowHeaders = [
  {
    name: 'Ref No',
    fieldName: 'rno'
  },
  {
    name: 'Mobile',
    fieldName: 'mob'
  },
  {
    name: 'Due Date',
    fieldName: 'rdate'
  },
  {
    name: 'Name',
    fieldName: 'mname'
  },
  {
    name: 'Address',
    fieldName: 'line1'
  },
  {
    name: 'City',
    fieldName: 'city'
  },
  {
    name: 'Actions',
    fieldName: 'actions'
  }
]

export default function Admin() {

  const [allMembers, setAllMembers] = useState([]);
  const [openPaymentDialog, setOpenPaymentDialog] = useState(false);

  const handlePaymentDialog = ()=> {
    setOpenPaymentDialog(!openPaymentDialog)
  }

  useEffect(() => {
    setAllMembers([
      {
        "rno": "3",
        "mname": "SATHYADHIRAJA RAO",
        "line1": "A-8, CORAL APTS. 7, 20TH ST.",
        "line2": "NANGANALLUR",
        "city": "CHENNAI",
        "pincode": "600061",
        "ano": "044-22242614",
        "mob": "9003114340",
        "email": "test@gmail.com",
        "rdate": "0000-00-00 00:00:00",
        "dtype": "Post",
        "atype": "A"
      },
      {
        "rno": "3",
        "mname": "SATHYADHIRAJA RAO",
        "line1": "A-8, CORAL APTS. 7, 20TH ST.",
        "line2": "NANGANALLUR",
        "city": "CHENNAI",
        "pincode": "600061",
        "ano": "044-22242614",
        "mob": "9003114340",
        "email": "test1@gmail.com",
        "rdate": "0000-00-00 00:00:00",
        "dtype": "Post",
        "atype": "A"
      }])
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="admin-table-header">
          <TableRow>
            <TableCell />
            {
              tableRowHeaders.map((header) => {
                return (
                  <TableCell align="center" key={header.name} >
                    {header.name}
                  </TableCell>
                )
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {allMembers.map((member) => (
            <AdminRow member={member} key={member.rno} handlePaymentDialog={handlePaymentDialog} />
          ))}
        </TableBody>
      </Table>
      <Dialog
        open={openPaymentDialog}
        maxWidth={"lg"}
        aria-labelledby="payment-details-title"
      >
        <DialogTitle id="payment-details-title">
          {"Payment History"}
        </DialogTitle>
        <DialogContent>
          <PaymentTable />
          {/* <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=> handlePaymentDialog()}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}
