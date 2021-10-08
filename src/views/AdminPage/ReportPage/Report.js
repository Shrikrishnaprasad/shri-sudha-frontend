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
import { useState, useEffect } from 'react'
import '../AdminMain.scss';

const members = [
    {
        "rno": "3",
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
        "rno": ' 5',
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
        "rno": "6",
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
        "rno": "8",
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
        "rno": "12",
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
        "rno": "13",
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
        "rno": "15",
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
        "rno": "16",
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
        "rno": "17",
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
        "rno": "20",
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

    const [filter, setFilter] = useState('');
    const [selectAll, setSelectAll] = useState(false);
    const [filteredList, setFilteredList] = useState([]);
    const [tableSortLabel, setTableSortLabel] = useState({
        selectedHeader: '',
        selectedOrder: 'desc'
    })
    const [paginationInfo, setPaginationInfo] = useState({
        currentPage: 0,
        noOfRecords: 5
    })

    const [paginatedMembers, setPaginatedMembers] = useState(members);

    const handlePageChange = (event, newPage) => {
        setPaginationInfo((prevState) => {
            return { ...prevState, currentPage: newPage };
        });
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
        if (activeHeader != 'rno') {
            paginatedMembers.sort((a, b) => {
                if (a[activeHeader] < b[activeHeader]) {
                    return tableSortLabel.selectedOrder == 'asc' ? 1 : -1;
                }
                if (a[activeHeader] > b[activeHeader]) {
                    return tableSortLabel.selectedOrder == 'asc' ? -1 : 1;
                }
                return 0;
            })
        } else {
            paginatedMembers.sort((a, b) => {
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
        let memberList = filteredList.length > 0 ? filteredList : members;
        let paginatedMembers = memberList.slice((paginationInfo.currentPage * paginationInfo.noOfRecords), (paginationInfo.currentPage * paginationInfo.noOfRecords) + paginationInfo.noOfRecords);
        setPaginatedMembers(paginatedMembers);
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const handleSelectAll = ()=>{
        paginatedMembers.map((member)=> member.isSelected = !selectAll);
        setSelectAll(!selectAll);
        setPaginatedMembers([...paginatedMembers])
    }

    const getFilteredData = () => {
        if (filter != '') {
            let filtertedMembers = [];
            for (let member of members) {
                for (let value in member) {
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

    useEffect(() => {
        setFilter('');
        setPaginationInfo({ currentPage: 0, noOfRecords: 5 })
        doPagination();
    }, [filteredList])

    useEffect(() => {
        doPagination();
        setTableSortLabel({
            selectedHeader: '',
            selectedOrder: 'desc'
        })
    }, [paginationInfo.currentPage, paginationInfo.noOfRecords])

    return (
        <Box>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <Card sx={{ minWidth: 275, borderRadius: 3, padding: 1.5 }} className="admin-report-filter-container">
                        <CardContent>
                            <Grid container spacing={2} columns={16}>
                                <Grid item xs={12}><TextField label="Filter" color="secondary" fullWidth value={filter} onChange={handleFilterChange} /></Grid>
                                <Grid item xs={4}><Button variant="outlined" color="secondary" size="large" style={{ marginTop: '12px' }} onClick={() => getFilteredData()}>Refresh</Button></Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ minWidth: 275, borderRadius: 3 }}>
                        <CardContent>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <h5>Total Active Members</h5>
                                    <p>375</p>
                                </div>
                                <div className='admin-reports-user-icon'>
                                    <AccountCircleIcon />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ minWidth: 275, borderRadius: 3 }}>
                        <CardContent>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                                    />{member.rno}
                                </TableCell>
                                <TableCell align="left">{member.mob}</TableCell>
                                <TableCell align="left">{member.rdate}</TableCell>
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
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredList.length > 0 ? filteredList.length : members.length}
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
