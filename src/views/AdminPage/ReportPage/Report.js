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
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';

//http
import axios from 'axios';
//csv export 
import { CSVLink } from "react-csv";
import '../AdminMain.scss';
import config from '../../../config';

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
        name: 'Due Date(MM/YY)',
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

const today = new Date();

export default function Report() {
    const [lastReportDate, setLastReportDate] = useState();
    const [filter, setFilter] = useState('');
    const [selectedDateForReport, setSelectedDateForReport] = useState(today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate())
    const [deliveryType, setDeliveryType] = useState('all');
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
    const [selectedMembers, setSelectedMembers] = useState([]);

    const handlePageChange = (event, newPage) => {
        setPaginationInfo((prevState) => {
            return { ...prevState, currentPage: newPage };
        });
        window.scrollTo(0, 0)
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
        paginatedMembers[i]['isSelected'] = !paginatedMembers[i]['isSelected'];
        setPaginatedMembers([...paginatedMembers])
    }

    const doPagination = () => {
        let memberList = filteredList.length > 0 ? filteredList : allMembers;
        if (memberList.length > 0) {
            let paginatedMembers = memberList.slice((paginationInfo.currentPage * paginationInfo.noOfRecords), (paginationInfo.currentPage * paginationInfo.noOfRecords) + paginationInfo.noOfRecords);
            setPaginatedMembers(paginatedMembers);
        }
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const handleDateChange = async (event) => {
        setSelectedDateForReport(event.target.value)
    }

    const handleDeliveryTypeChange = (event) => {
        setDeliveryType(event.target.value);
        let filteredUsers = allMembers.filter((member) => {
            return member.dtype.toLowerCase() == event.target.value.toLowerCase()
        })
        event.target.value == 'all' ? setFilteredList(allMembers) : setFilteredList(filteredUsers);
    }

    const handleSelectAll = () => {
        if(filteredList.length > 0) {
            filteredList.map((member) => member.isSelected = !selectAll);
        }
        else {
            allMembers.map((member) => member.isSelected = !selectAll);
            setAllMembers([...allMembers])
        }
        setSelectAll(!selectAll);
        
    }

    const getFilteredData = async () => {
        if (filter != '') {
            let filtertedMembers = [];
            for (let member of allMembers) {
                for (let value in member) {
                    if (isRefNoHeader(value))
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
            setFilteredList([...allMembers]);
        }
    }

    const isRefNoHeader = (value) => {
        return value == 'refno';
    }

    const getUsersForReport = async () => {
        axios.get(`${config.apiBaseUrl}/users/report/${selectedDateForReport}`).then(({ data }) => {
            data.success ? setAllMembers(data.users_by_reportDate.users) : setAllMembers([]);
            setLastReportDate(data.users_by_reportDate.lastReportDate);
        })
    }

    const getReportWithSelectedMembers = async (event, done) => {
        let selectedMemberList = [];
        if(filteredList.length > 0) {
            selectedMemberList = filteredList.filter((member) => {
                return member.isSelected;
            })
        }
        else {
            selectedMemberList = allMembers.filter((member) => {
                return member.isSelected;
            })
        }
        const selectedMembersRefNo = selectedMemberList.map(member=> member.refno);
        await setSelectedMembers(selectedMemberList)
        await axios.post(`${config.apiBaseUrl}/users/report/exportDate`, {"members": selectedMembersRefNo}).then(({data})=>{
            if(!data.success)
                console.log('Error in updating export date')
        })
        done();
    }

    const getMembersAfterFileExport = () => {
        const newMembers = allMembers.filter((member) => {
            const selectedDate = new Date(lastReportDate)
            return (new Date(member.pdate) < new Date())
                    && (new Date(member.recdate) > selectedDate && new Date(member.recdate) < new Date())
        })
        setFilteredList(newMembers);
    }

    useEffect(() => {
        getUsersForReport();
    }, [])

    useEffect(() => {
        setFilter('');
        setPaginationInfo({ currentPage: 0, noOfRecords: 50 })
        doPagination();
    }, [filteredList])

    useEffect(() => {
        getUsersForReport();
        setFilteredList([]);
    }, [selectedDateForReport])

    useEffect(() => {
        doPagination();
    }, [paginationInfo.currentPage, paginationInfo.noOfRecords, tableSortLabel.selectedOrder, allMembers])

    return (
        <Box>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={4}>
                    <Card sx={{ borderRadius: 3, backgroundColor: 'mediumorchid', color: 'white' }}>
                        <CardContent>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700' }}>
                                <div>
                                    <h5><b>Previous report taken on</b></h5>
                                    <p>{new Date(lastReportDate).toDateString()}</p>
                                </div>
                                <div className='admin-reports-user-icon'>
                                    <DriveFileMoveIcon />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ borderRadius: 3, backgroundColor: 'rgb(30,136,229)', color: 'white' }}>
                        <CardContent>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700' }}>
                                <div>
                                    <h5><b>New Members</b></h5>
                                    <a style={{textDecoration: "underline", color: "white", cursor: "pointer"}} onClick={getMembersAfterFileExport}>click here</a>
                                </div>
                                <div className='admin-reports-user-icon'>
                                    <AccountCircleIcon />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <Card sx={{ borderRadius: 3, padding: 1.5 }} className="admin-report-filter-container">
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={8}><TextField
                                    type="date"
                                    color="secondary"
                                    fullWidth
                                    value={selectedDateForReport}
                                    onChange={(e) => handleDateChange(e)}
                                    required
                                /></Grid>
                                <Grid item xs={8}>
                                    <FormControl fullWidth>
                                        <InputLabel id="typeOfDelivery" color="secondary">Delivery Type</InputLabel>
                                        <Select
                                            labelId="typeOfDelivery"
                                            value={deliveryType}
                                            label="Delivery Type"
                                            color='secondary'
                                            onChange={handleDeliveryTypeChange}
                                        >
                                            <MenuItem value={'all'}>All</MenuItem>
                                            <MenuItem value={'post'}>Post</MenuItem>
                                            <MenuItem value={'2nd post'}>2nd Post</MenuItem>
                                            <MenuItem value={'direct'}>Direct</MenuItem>
                                            <MenuItem value={'couriers'}>Couriers</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <div style={{ display: 'flex', flex: 1, justifyContent: "flex-end", marginTop: "42px" }}>
                    <Grid item xs={4} style={{ marginRight: "12px" }}><TextField label="Search" color="secondary" style={{ backgroundColor: "white", borderRadius: "5px" }} fullWidth value={filter} onChange={handleFilterChange} /></Grid>
                    <Grid item xs={1}>
                        <Fab color="secondary" aria-label="add" onClick={() => getFilteredData()}>
                            <SearchIcon />
                        </Fab>
                    </Grid>
                        {/* <Button variant="contained" color="secondary" size="large" style={{ padding: "14px" }} fullWidth onClick={() => getFilteredData()}>Search</Button></Grid> */}
                </div>
            </Grid>
            {allMembers.length > 0 ?
                (<><TableContainer component={Paper} className="admin-table-container">
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
                            <CSVLink style={{ color: 'white' }}
                                data={selectedMembers}
                                onClick={(event, done) => getReportWithSelectedMembers(event, done)}
                                asyncOnClick={true}
                                filename={"my-file.csv"}
                                className="btn btn-primary"
                                target="_blank"
                            >
                                Download CSV
                            </CSVLink>
                        </Button>
                    </div>
                </>) :
                <>
                    <Stack sx={{ display: 'flex', justifyContent: 'center', padding: '30px' }} spacing={2} direction="row">
                        <CircularProgress color="secondary" />
                    </Stack>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        Load the lord in, while loading...
                    </div>
                </>
            }
        </Box>

    );
}
