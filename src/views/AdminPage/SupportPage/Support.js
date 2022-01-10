import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TextField from '@mui/material/TextField';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Support() {

  const [usersByReportDate, setUsersByReportDate] = useState([]);
  const [reportHistory, setReportHistory] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = () =>{
    axios.get('http://localhost:3005/users/reportTakenDate').then(({data})=>{
      if(data.success) {
        setUsersByReportDate(data.users)
      }
  })

  axios.get('http://localhost:3005/report/history').then(({data})=>{
    if(data.success) {
      setReportHistory(data.reports_history)
    }
})
  }

  const updatePostedDate = (event, index)=>{
    usersByReportDate[index]['postDate'] = event.target.value;
    const updatedUsersByReportDate = [...usersByReportDate];
    setUsersByReportDate(updatedUsersByReportDate);
  }

  const submitPostedDate = (index)=> {
    const req = {
      reportDate: usersByReportDate[index].report_date,
      postedDate: new Date(usersByReportDate[index].postDate),
      count: usersByReportDate[index].total_members
    }
    axios.put("http://localhost:3005/postedDate", req).then(({data}) => {
      if(data.success){
        fetchData();
      }
    })
  }

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
          {usersByReportDate.map((reportDate, index) => (
            reportDate.report_date ? (<TableRow
              key={reportDate.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row" sx={{fontSize: "20px"}}>
                {new Date(reportDate.report_date).toUTCString()}
              </TableCell>
              <TableCell align="left" sx={{fontSize: "20px"}}>{reportDate.total_members}</TableCell>
              <TableCell align="left">
                <TextField
                  type={reportDate.posted_date ? 'text': 'date'}
                  color="secondary"
                  value= {!reportDate.posted_date ? reportDate.postDate : new Date(reportDate.posted_date).toUTCString()}
                  onChange={(event)=>updatePostedDate(event, index)}
                  disabled={reportDate.posted_date}
                  fullWidth
                  required
                />
              </TableCell>
              <TableCell align="center">
                <Button variant="contained" disabled={reportDate.posted_date} fullWidth color="secondary" sx={{padding: 2}} onClick={()=>submitPostedDate(index)}>Submit</Button>
              </TableCell>
            </TableRow>): ''
          ))}
        </TableBody>
      </Table>
      {reportHistory.length > 0 ? (<div>
      <h2 style={{textAlign: "center", textDecoration: "underline"}}>Completed Transactions</h2>
      <Table>
      <TableHead>
          <TableRow>
            <TableCell align="left">Report take date</TableCell>
            <TableCell align="left">count</TableCell>
            <TableCell align="left">Posted date</TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
      {reportHistory.map((reportDate) =>
            <TableRow
              key={reportDate.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row" sx={{fontSize: "20px"}}>
                {new Date(reportDate.report_taken_date).toUTCString()}
              </TableCell>
              <TableCell align="left" sx={{fontSize: "20px"}}>
                {reportDate.count}
              </TableCell>
              <TableCell align="left" sx={{fontSize: "20px"}}>
                {new Date(reportDate.posted_date).toDateString()}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        </Table>
        </div>) : ''
      }
    </TableContainer>
  );
}
