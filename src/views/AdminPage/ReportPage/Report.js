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
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMoveOutlined';
import { useState, useEffect } from 'react';
//http
import axios from 'axios';
import '../AdminMain.scss';

const tableRowHeaders = [
    {
        name: 'Ref No',
        fieldName: 'refno'
    },
    {
        name: 'Mobile',
        fieldName: 'mobile'
    },
    {
        name: 'Due Date',
        fieldName: 'duedate'
    },
    {
        name: 'Name',
        fieldName: 'mname'
    },
    {
        name: 'Address Line1',
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
    const [filter, setFilter] = useState('');
    const [selectAll, setSelectAll] = useState(false);
    const [filteredList, setFilteredList] = useState([]);
    const [tableSortLabel, setTableSortLabel] = useState({
        selectedHeader: '',
        selectedOrder: 'desc'
    })
    const [paginationInfo, setPaginationInfo] = useState({
        currentPage: 0,
        noOfRecords: 50
    })

    const [allMembers, setAllMembers] = useState([]);
    const [paginatedMembers, setPaginatedMembers] = useState(allMembers);

    const handlePageChange = (event, newPage) => {
        setPaginationInfo((prevState) => {
            return { ...prevState, currentPage: newPage };
        });
        window.scrollTo(0,0)
    }

    const handleRowPerPage = (event) => {
        setPaginationInfo((prevState) => {
            return { ...prevState, noOfRecords: parseInt(event.target.value, 10), currentPage: 0 };
        });
    }

    const handleHeaderChange = (activeHeader) => {
        setTableSortLabel(prevState => ({
            ...prevState,
            selectedHeader: activeHeader,
            selectedOrder: (prevState.selectedOrder == 'asc') ? 'desc' : 'asc'
        }));
        if (activeHeader != 'refno') {
            allMembers.sort((a, b) => {
                if (a[activeHeader].toLowerCase() < b[activeHeader].toLowerCase()) {
                    return tableSortLabel.selectedOrder == 'asc' ? 1 : -1;
                }
                if (a[activeHeader].toLowerCase() > b[activeHeader].toLowerCase()) {
                    return tableSortLabel.selectedOrder == 'asc' ? -1 : 1;
                }
                return 0;
            })
        } else {
            allMembers.sort((a, b) => {
                if (parseInt(a[activeHeader]) < parseInt(b[activeHeader])) {
                    return tableSortLabel.selectedOrder == 'asc' ? 1 : -1;
                }
                if (parseInt(a[activeHeader]) > parseInt(b[activeHeader])) {
                    return tableSortLabel.selectedOrder == 'asc' ? -1 : 1;
                }
                return 0;
            })
        }
    }

    const handleCheckboxChange = (i) => {
        console.log(paginatedMembers[i])
        paginatedMembers[i]['isSelected'] = !paginatedMembers[i]['isSelected'];
        setPaginatedMembers([...paginatedMembers])
    }

    const doPagination = () => {
        let memberList = filteredList.length > 0 ? filteredList : allMembers;
        if(memberList.length > 0) {
        let paginatedMembers = memberList.slice((paginationInfo.currentPage * paginationInfo.noOfRecords), (paginationInfo.currentPage * paginationInfo.noOfRecords) + paginationInfo.noOfRecords);
        setPaginatedMembers(paginatedMembers);
        }
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const handleSelectAll = () => {
        allMembers.map((member) => member.isSelected = !selectAll);
        setSelectAll(!selectAll);
        setAllMembers([...allMembers])
    }

    const getFilteredData = () => {
        if (filter != '') {
            let filtertedMembers = [];
            for (let member of allMembers) {
                for (let value in member) {
                    if(isRefNoHeader(value))
                        member[value] = member[value].toString();
                    if (value !== 'isSelected' && member[value].toLowerCase().includes(filter.toLowerCase())) {
                        filtertedMembers.push(member);
                        break;
                    }
                }
            }
            setFilteredList(filtertedMembers);
        }
        else {
            setFilteredList([]);
        }
    }
    
    const isRefNoHeader = (value) =>{
        return value == 'refno';
    }

    useEffect(() => {
        axios.get('http://localhost:3005/users/report').then(({data})=>{
            data.success ? setAllMembers(data.users) : setAllMembers([]);
        })
    }, [])

    useEffect(() => {
        setFilter('');
        setPaginationInfo({ currentPage: 0, noOfRecords: 50 })
        doPagination();
    }, [filteredList])

    useEffect(() => {
        console.log('pagination called')
        doPagination();
    }, [paginationInfo.currentPage, paginationInfo.noOfRecords, tableSortLabel.selectedOrder, allMembers])

    return (
        <Box>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={7}>
                    <Card sx={{ borderRadius: 3, padding: 1.5 }} className="admin-report-filter-container">
                        <CardContent>
                            <Grid container spacing={2} columns={16}>
                                <Grid item xs={12}><TextField label="Filter" color="secondary" fullWidth value={filter} onChange={handleFilterChange} /></Grid>
                                <Grid item xs={4}><Button variant="outlined" color="secondary" size="large" style={{ marginTop: '12px' }} onClick={() => getFilteredData()}>Refresh</Button></Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ borderRadius: 3, backgroundColor: 'mediumorchid', color: 'white' }}>
                        <CardContent>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight:'700' }}>
                                <div>
                                    <h5>Total Members</h5>
                                    <p>375</p>
                                </div>
                                <div className='admin-reports-user-icon'>
                                    <AccountCircleIcon />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ borderRadius: 3, backgroundColor: 'rgb(30,136,229)', color:'white' }}>
                        <CardContent>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight:'700' }}>
                                <div>
                                    <h5>New Members</h5>
                                    <p>375</p>
                                </div>
                                <div className='admin-reports-user-icon'>
                                    <AccountCircleIcon />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ borderRadius: 3, backgroundColor: '#e01fc8b8', color: 'white' }}>
                        <CardContent>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight:'700' }}>
                                <div>
                                    <h5>Last file export</h5>
                                    <p>07/10/2021</p>
                                </div>
                                <div className='admin-reports-user-icon'>
                                    <DriveFileMoveIcon />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <TableContainer component={Paper} className="admin-table-container">
                <Table aria-label="simple table" >
                    <TableHead className="admin-table-header">
                        <TableRow>
                            {
                                tableRowHeaders.map((header) => {
                                    return (
                                        <TableCell align="left" key={header.name} >
                                            {header.name == 'Ref No' ? (
                                                <>
                                                    <Checkbox
                                                        color="primary"
                                                        checked={selectAll}
                                                        onChange={() => handleSelectAll()}
                                                    /> {header.name}</>) : header.name}
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
                        {paginatedMembers.map((member, index) => (
                            <TableRow
                                key={member.rno}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell component="th" scope="row" align="left">
                                    <Checkbox
                                        color="primary"
                                        checked={member.isSelected || false}
                                        onChange={() => handleCheckboxChange(index)}
                                    />{member.refno}
                                </TableCell>
                                <TableCell align="left">{member.mobile}</TableCell>
                                <TableCell align="left">{member.duedate}</TableCell>
                                <TableCell align="left">{member.mname}</TableCell>
                                <TableCell align="left">{member.line1}</TableCell>
                                <TableCell align="left">{member.line2}</TableCell>
                                <TableCell align="left">{member.city}</TableCell>
                                <TableCell align="left">{member.pincode}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
                <TablePagination
                    rowsPerPageOptions={[50, 100, 200]}
                    component="div"
                    count={filteredList.length > 0 ? filteredList.length : allMembers.length}
                    rowsPerPage={paginationInfo.noOfRecords}
                    page={paginationInfo.currentPage}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleRowPerPage}
                />
                <Button variant="contained" color="secondary" size="large" style={{ margin: '20px 0', }}>
                    Export to csv
                </Button>
            </div>
        </Box>

    );
}
