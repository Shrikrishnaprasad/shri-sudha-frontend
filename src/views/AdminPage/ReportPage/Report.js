import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import { useState, useEffect } from 'react'
import '../AdminMain.scss';

const members = [
    {
        "rno": 3,
        "mname": "SATHYADHIRAJA RAO",
        "line1": "A-8, CORAL APTS. 7, 20TH ST.",
        "line2": "NANGANALLUR",
        "city": "CHENNAI",
        "pincode": "600061",
        "ano": "044-22242614",
        "mob": "9003114340",
        "email": "",
        "rdate": "0000-00-00 00:00:00",
        "dtype": "Post",
        "atype": "A"
    },
    {
        "rno": 5,
        "mname": "V. MADHWARAJ",
        "line1": "C-404, AKARSHAN Apts. Sri Sai Nagar 1st Main Road,",
        "line2": "CTO Colony, Tambaram West,",
        "city": "CHENNAI",
        "pincode": "600045",
        "ano": "",
        "mob": "9445563154",
        "email": "madhvaraj69@gmail.com",
        "rdate": "2013-04-30T18:30:00.000Z",
        "dtype": "Post",
        "atype": "A"
    },
    {
        "rno": 6,
        "mname": "S. VENKATA KRISHNAN",
        "line1": "Plot 306, Sri Hari Nivas,  4th Cross St,",
        "line2": "4th Main Road, Samayapuram Ngr, Porur",
        "city": "CHENNAI",
        "pincode": "600116",
        "ano": "",
        "mob": "9884364643",
        "email": "",
        "rdate": "2012-10-07T18:30:00.000Z",
        "dtype": "Post",
        "atype": "A"
    },
    {
        "rno": 8,
        "mname": "R. ANANDA RAO",
        "line1": "New-10, Old O/43, Valluvar St.",
        "line2": "Thirunagar, Ashoknagar Post",
        "city": "CHENNAI",
        "pincode": "600083",
        "ano": "9003132658",
        "mob": "9003132658",
        "email": "",
        "rdate": "2013-10-21T18:30:00.000Z",
        "dtype": "Post",
        "atype": "A"
    },
    {
        "rno": 12,
        "mname": "R. RAJARAM",
        "line1": "Block - C- 6, Door-84, 3-Flr., Kendriya Vihar",
        "line2": "Paruthipattu AAVADI",
        "city": "CHENNAI",
        "pincode": "600071",
        "ano": "6381761752",
        "mob": "9940013091",
        "email": "",
        "rdate": "2013-08-27T18:30:00.000Z",
        "dtype": "Post",
        "atype": "A"
    },
    {
        "rno": 13,
        "mname": "SMT. RADHA SOUNDERARAJAN",
        "line1": "4, SIVAM FLATS, 2nd Floor,  93-ST.",
        "line2": "21-st AVENUE, ASHOK NAGAR",
        "city": "CHENNAI",
        "pincode": "600083",
        "ano": "",
        "mob": "9884411476",
        "email": "",
        "rdate": "2012-12-23T18:30:00.000Z",
        "dtype": "Post",
        "atype": "A"
    },
    {
        "rno": 15,
        "mname": "R. SRIDHARAN",
        "line1": "2-(14), SCHOOL ST, RADHA NAGAR",
        "line2": "CHROMEPET",
        "city": "CHENNAI",
        "pincode": "600044",
        "ano": "044-22651964, 8825455623",
        "mob": "9962843593",
        "email": "",
        "rdate": "2012-12-11T18:30:00.000Z",
        "dtype": "Post",
        "atype": "A"
    },
    {
        "rno": 16,
        "mname": "DR. K. SRINIVAS",
        "line1": "CF02, Shravanthi Orchids, 7th cross, 1st main,",
        "line2": "Revenue Layout, Padmanabha Nagar,",
        "city": "BANGALORE",
        "pincode": "560070",
        "ano": "",
        "mob": "9482885950",
        "email": "ksrinivas.panth@gmail.com",
        "rdate": "2013-07-12T18:30:00.000Z",
        "dtype": "Post",
        "atype": "A"
    },
    {
        "rno": 17,
        "mname": "T. RAGHAVENDRAN",
        "line1": "G1, MARUDHAM ELEGANCE",
        "line2": "171, CHINNAMAL ST, K.K. PUDUR",
        "city": "COIMBATORE",
        "pincode": "641038",
        "ano": "6547418,",
        "mob": "9894709531",
        "email": "traghavendran@yahoo.com",
        "rdate": "2012-10-07T18:30:00.000Z",
        "dtype": "Post",
        "atype": "A"
    },
    {
        "rno": 20,
        "mname": "N. VASUDEVAN",
        "line1": "1/959 New Kuberan Nagar",
        "line2": "5th St Madipakkam ",
        "city": "CHENNAI",
        "pincode": "600091",
        "ano": "24356632",
        "mob": "9789920647",
        "email": "",
        "rdate": "2013-08-11T18:30:00.000Z",
        "dtype": "Post",
        "atype": "A"
    }]

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
        name: 'Address Lin1',
        fieldName: 'line1'
    },
    {
        name: 'Address Line2',
        fieldName: 'line2'
    },
    {
        name: 'City',
        fieldName: 'city'
    },
    {
        name: 'Pincode',
        fieldName: 'pincode'
    }
]

export default function Report() {
    const [tableSortLabel, setTableSortLabel] = useState({
        selectedHeader: '',
        selectedOrder: 'desc'
    })

    const [paginationInfo, setPaginationInfo] = useState({
        currenPage: 0,
        noOfRecords: 5
    })

    const [paginatedMembers, setPaginatedMembers] = useState(members);

    const handlePageChange = (event, newPage)=>{
        setPaginationInfo((prevState)=> {
            return {...prevState, currenPage: newPage};
        });        
    }

    const handleRowPerPage = (event)=>{
        setPaginationInfo((prevState)=>{
            return {...prevState, noOfRecords: parseInt(event.target.value, 10), currenPage: 0};
        });  
    }

    const handleHeaderChange = (activeHeader) => {
        setTableSortLabel(prevState => ({
            ...prevState,
            selectedHeader: activeHeader,
            selectedOrder: (prevState.selectedOrder == 'asc') ? 'desc' : 'asc'
        }));

        paginatedMembers.sort((a, b) => {
            if (a[activeHeader] < b[activeHeader]) {
                return tableSortLabel.selectedOrder == 'asc' ? 1 : -1;
            }
            if (a[activeHeader] > b[activeHeader]) {
                return tableSortLabel.selectedOrder == 'asc' ? -1 : 1;
            }
            return 0;
        })
    }

    const doPagination = ()=>{
        let paginatedMembers = members.slice((paginationInfo.currenPage*paginationInfo.noOfRecords), (paginationInfo.currenPage*paginationInfo.noOfRecords)+paginationInfo.noOfRecords);
        setPaginatedMembers(paginatedMembers);
    }

    useEffect(()=>{
        doPagination();
        setTableSortLabel({
            selectedHeader:'',
            selectedOrder: 'desc'
        })
    }, [paginationInfo.currenPage, paginationInfo.noOfRecords])
    
    return (
        <Box>
        <TableContainer component={Paper} className="admin-table-container">
            <Table aria-label="simple table" >
                <TableHead className="admin-table-header">
                    <TableRow>
                        {
                            tableRowHeaders.map((header) => {
                                return (
                                    <TableCell align="center" key={header.name}>
                                        {header.name}
                                        <TableSortLabel
                                            active={tableSortLabel.selectedHeader == header.fieldName}
                                            direction={tableSortLabel.selectedOrder}
                                            onClick={() => handleHeaderChange(header.fieldName)}
                                        >
                                            {/* <Box component="span" sx={visuallyHidden}>
                                            </Box> */}
                                        </TableSortLabel>
                                    </TableCell>
                                )
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paginatedMembers.map((member) => (
                        <TableRow
                            key={member.rno}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {member.rno}
                            </TableCell>
                            <TableCell align="center">{member.mob}</TableCell>
                            <TableCell align="center">{member.rdate}</TableCell>
                            <TableCell align="center">{member.mname}</TableCell>
                            <TableCell align="center">{member.line1}</TableCell>
                            <TableCell align="center">{member.line2}</TableCell>
                            <TableCell align="center">{member.city}</TableCell>
                            <TableCell align="center">{member.pincode}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
                   rowsPerPageOptions={[5, 10, 25]}
                   component="div"
                   count={members.length}
                   rowsPerPage={paginationInfo.noOfRecords}
                   page={paginationInfo.currenPage}
                   onPageChange={handlePageChange}
                   onRowsPerPageChange={handleRowPerPage}
        />
        </Box>
        
    );
}
