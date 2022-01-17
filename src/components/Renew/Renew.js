import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { formatDateWithMonthName, formatDateToYYMMDD } from 'utilities/HelperFunctions';
import config from '../../config.js'; 

export default function Renew({rno, exDate}) {
    const [open, setOpen] = React.useState(false);
    const [renewalData, setRenewalData] = useState({
        dueDate: '',
        noOfYears: 1,
        modeOfPayment: "",
        bankName: "",
        transactionID: "",
        amount: 150,
        rno: rno
    })
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () =>{
        console.log(renewalData)
        console.log(formatDateToYYMMDD(renewalData.dueDate))
        axios.put(config.apiBaseUrl+"/update/paymentInfo", {paymentInfo: renewalData}).then(({data})=>{
            if(data.success){
                setOpen(false);
            }
        })
    }

    const handleRenewalData = (event) => {
        renewalData[event.target.name] = event.target.value;
        setRenewalData({...renewalData});
    }

    useEffect(()=> {
        console.log(exDate)
        setRenewalData({...renewalData, dueDate: formatDateToYYMMDD(exDate)})
    },[exDate])

    return (
        <div>
            <Button variant="contained" color="secondary" fullWidth size="large" startIcon={<AutorenewIcon />} onClick={handleClickOpen}>
                Renew
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle><h3>Renewal Form</h3></DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText> */}
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={6} sx={{ fontSize: "20px" }}>
                            Expired Date
                        </Grid>
                        <Grid item xs={6} sx={{ fontSize: "20px" }}>
                            <strong>{formatDateWithMonthName(exDate)}</strong>
                        </Grid>
                        <Grid item xs={6} sx={{ fontSize: "20px" }}>
                            Due Date
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                color="secondary"
                                type="date"
                                fullWidth
                                name="dueDate"
                                value={renewalData.dueDate}
                                onChange={(event)=> handleRenewalData(event)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="renew-noOfYears" color="secondary">No of years</InputLabel>
                                <Select
                                    labelId="renew-noOfYears"
                                    label=" No of years "
                                    color="secondary"
                                    name='noOfYears'
                                    value={renewalData.noOfYears}
                                    onChange={(event)=> handleRenewalData(event)}
                                >
                                    <MenuItem value={1}>1 year</MenuItem>
                                    <MenuItem value={2}>2 years</MenuItem>
                                    <MenuItem value={3}>3 years</MenuItem>
                                    <MenuItem value={4}>4 years</MenuItem>
                                    <MenuItem value={5}>5 years</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="renew-mop" color="secondary">Mode of payment</InputLabel>
                                <Select
                                    labelId="renew-mop"
                                    label=" Mode of payment "
                                    color="secondary"
                                    name='modeOfPayment'
                                    onChange={(event)=> handleRenewalData(event)}
                                >
                                    <MenuItem value={"Net Banking"}>Net Banking</MenuItem>
                                    <MenuItem value={"DD"}>DD</MenuItem>
                                    <MenuItem value={"Money Order"}>Money Order</MenuItem>
                                    <MenuItem value={"cash"}>Cash</MenuItem>
                                    <MenuItem value={"cheque"}>Cheque</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Bank Name"
                                color="secondary"
                                name="bankName"
                                fullWidth
                                onChange={(event)=> handleRenewalData(event)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Transaction ID"
                                color="secondary"
                                fullWidth
                                name="transactionID"
                                onChange={(event)=> handleRenewalData(event)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Amount"
                                color="secondary"
                                fullWidth
                                name="amount"
                                onChange={(event)=> handleRenewalData(event)}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions sx={{ marginBottom: "12px", marginRight: "12px" }}>
                    <Button color="secondary" variant="outlined" onClick={handleClose}>Cancel</Button>
                    <Button color="secondary" variant="contained" onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
