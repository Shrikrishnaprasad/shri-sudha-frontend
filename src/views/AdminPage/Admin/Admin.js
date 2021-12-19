import React, { useState, useRef } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { red } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

//material icons
import SaveIcon from '@mui/icons-material/Save';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WcIcon from '@mui/icons-material/Wc';
import PaidIcon from '@mui/icons-material/Paid';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';


//http
import axios from 'axios';

//Image share 
import html2canvas from 'html2canvas';
import Receipt from 'components/Receipt/Receipt';

//utilities
import { formatDateWithMonthName, formatPaymentInfo } from '../../../utilities/HelperFunctions.js';

const actions = [
  { icon: <MenuBookIcon fontSize="medium" />, name: 'Upload Book' }
];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Admin() {
  const [collapseOpen, setCollapseOpen] = React.useState({ general: false, matrimony: false, payment: false });
  const [refNo, setRefNo] = useState('');
  const [memberInfo, setMemberInfo] = useState('');
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState('');
  const toggleCollapse = (collapseName) => {
    setCollapseOpen({ ...collapseOpen, [collapseName]: !collapseOpen[collapseName] })
  };
  const [snackbarMsg, setSnackbarMsg] = useState({
    open: false,
    horizontal: 'right',
    vertical: 'top'
  })
  const {open, horizontal, vertical} = snackbarMsg;

  const handleRefNoChange = (event) => {
    setRefNo(event.target.value);
  }

  const receiptSection = useRef(null);

  const generateImage = async (payment) => {
    await setSelectedPayment(payment);
    const canvas = await html2canvas(receiptSection.current, {
      onclone: function (cloneDoc) {
        var clonedSection = cloneDoc.getElementById('receipt');
        clonedSection.style.display = 'block'
      }
    });
    const dataUrl = canvas.toDataURL();
    const blob = await (await fetch(dataUrl)).blob();
    const filesArray = [new File([blob], 'htmldiv.png', { type: blob.type, lastModified: new Date().getTime() })];
    const shareData = {
      files: filesArray,
    };
    navigator.share(shareData).then(() => {
      console.log('Shared successfully');
    });
  }

  const searchForRefNo = (e) => {
    e.preventDefault();
    if (refNo) {
      axios.get(`http://localhost:3005/member/${refNo}`).then((data) => {
        let subscriberInfo = data.data;
        if (subscriberInfo.success) {
          setMemberInfo(subscriberInfo.member_info[0]);
          subscriberInfo.member_info[0] == undefined ? setSnackbarMsg({...snackbarMsg, open: true}) : setSnackbarMsg({...snackbarMsg, open: false});
        }
      })
      axios.get(`http://localhost:3005/paymentHistory/${refNo}`).then((payments) => {
        let paymentsHistory = payments.data;
        if (paymentsHistory.success) {
          setPaymentHistory(paymentsHistory.payment_history);
        }
      })
    }
  }

  return (
    <div className="admin-main">
      <form className="search-form" onSubmit={(event)=>searchForRefNo(event)}>
        <TextField
          id="outlined-name"
          label="Ref No"
          color="secondary"
          value={refNo}
          onChange={(event) => handleRefNoChange(event)}
          sx={{ marginRight: 1, flex: 1, backgroundColor: "white" }}
          autoFocus
        />
        <Fab color="secondary" aria-label="add" onClick={(event)=>searchForRefNo(event)}>
          <SearchIcon />
        </Fab>
      </form>
      <Snackbar
        anchorOrigin={{vertical, horizontal}}
        open={open}
      >
      <Alert severity="error">No records found !</Alert>
      </Snackbar>
      {memberInfo ? (
        <>
          <Card>
            <CardHeader avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                G
              </Avatar>
            }
              title={memberInfo.mname}
              subheader={`(${memberInfo.rno})`}
            />
            <CardContent style={{ marginLeft: "72px", padding: 0 }}>
              <Stack direction="row" spacing={1}>
                {
                  //TODO change it to dynamic values 
                }
                <Chip icon={<LocalShippingIcon />} label="04/12/2021" color="success" variant="contained" />
                <Chip icon={<TimelapseIcon />} label={paymentHistory[0] ? formatDateWithMonthName(paymentHistory[0].exdate) : ''} color="primary" variant="contained" />
              </Stack>
            </CardContent>
            <CardContent>
              <ListItemButton onClick={() => toggleCollapse("general")}>
                <ListItemIcon>
                  <AccountCircleIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="General" secondary="Basic subscriber details" />
                {collapseOpen.general ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={collapseOpen.general} timeout="auto" unmountOnExit>
                <Box sx={{
                  display: 'grid',
                  gridTemplateColumns: { sm: '1fr 1fr' },
                  gap: 2,
                  marginTop: 2
                }}>
                  <TextField
                    id="outlined-name"
                    label="Name"
                    color="secondary"
                    value={memberInfo.mname}
                  />
                  <TextField
                    id="outlined-uncontrolled"
                    label="Mobile"
                    color="secondary"
                    value={memberInfo.mob}
                  />
                  <TextField
                    id="outlined-name"
                    label="City"
                    color="secondary"
                    value={memberInfo.city}
                  />
                  <TextField
                    id="outlined-name"
                    label="Pincode"
                    color="secondary"
                    value={memberInfo.pincode}
                  />
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" color="secondary">Mode</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Model"
                      color="secondary"
                      value={memberInfo.dtype}
                    >
                      <MenuItem value={"Post"}>Post</MenuItem>
                      <MenuItem value={"Direct"}>Direct</MenuItem>
                      <MenuItem value={"Online"}>Online</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="outlined-name"
                    label="line2"
                    color="secondary"
                    value={memberInfo.line2}
                  />
                  <TextField
                    id="outlined-uncontrolled"
                    label="line1"
                    multiline
                    rows={3}
                    color="secondary"
                    value={memberInfo.line1}
                  />
                  <FormControlLabel style={{ paddingBottom: "15px", color: "black" }}
                    control={
                      <Switch name="deactivate" color="secondary" />
                    }
                    label="Enabling this will deactivate the user"
                  />
                  <Button variant="contained" color="secondary" fullWidth size="large" startIcon={<SaveIcon />}>Save changes</Button>
                  <Button variant="contained" color="secondary" fullWidth size="large" startIcon={<AutorenewIcon />}>Renew</Button>
                </Box>
              </Collapse>

              <ListItemButton onClick={() => toggleCollapse("matrimony")}>
                <ListItemIcon>
                  <WcIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Matrimony" secondary="Matrimony subscription details - till 12/12/2021" />
                {collapseOpen.matrimony ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={collapseOpen.matrimony} timeout="auto" unmountOnExit>
                <Box sx={{
                  marginTop: 2
                }}>
                  <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { sm: '1fr 1fr' },
                    gap: 2,
                    marginTop: 2
                  }}>
                    <TextField
                      id="outlined-name"
                      label="Name"
                      color="secondary"
                    />
                    <TextField
                      id="outlined-uncontrolled"
                      label="DOB"
                      color="secondary"
                    />
                    <TextField
                      id="outlined-name"
                      label="Gothra"
                      color="secondary"
                    />
                    <TextField
                      id="outlined-name"
                      label="Rasi"
                      color="secondary"
                    />
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label" color="secondary">Type</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Type"
                        color="secondary"
                      >
                        <MenuItem value={10}>Madhwa Kannada</MenuItem>
                        <MenuItem value={20}>Madhwa Desistha</MenuItem>
                        <MenuItem value={30}>Smartha Desistha</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      id="outlined-name"
                      label="Height"
                      color="secondary"
                    />
                    <TextField
                      id="outlined-name"
                      label="Education"
                      color="secondary"
                    />
                    <TextField
                      id="outlined-name"
                      label="Profession"
                      color="secondary"
                    />
                    <TextField
                      id="outlined-name"
                      label="Salary"
                      color="secondary"
                    />
                    <TextField
                      id="outlined-name"
                      label="Place"
                      color="secondary"
                    />
                    <TextField
                      id="outlined-name"
                      label="Contact Name"
                      color="secondary"
                    />
                    <TextField
                      id="outlined-name"
                      label="Contact Number"
                      color="secondary"
                    />

                    <Button variant="contained" color="secondary" fullWidth size="large" startIcon={<SaveIcon />}>Save changes</Button>
                    <Button variant="contained" color="secondary" fullWidth size="large" startIcon={<AutorenewIcon />}>Renew</Button>
                  </Box>
                </Box>
              </Collapse>

              <ListItemButton onClick={() => toggleCollapse("payment")}>
                <ListItemIcon>
                  <PaidIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Payment" secondary="Payment history" />
                {collapseOpen.payment ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={collapseOpen.payment} timeout="auto" unmountOnExit>
                <List className="admin-main-payment-hist">
                  {paymentHistory.map((payment, index) => (
                    <ListItem key={payment.suid} style={{ borderBottom: (index != paymentHistory.length - 1) ? "1px solid lightgray" : '' }}>
                      <Grid container spacing={2}>
                        <Grid item xs={9}>
                          <ListItemText style={{ overflowWrap: 'anywhere' }} primary={formatDateWithMonthName(payment.recdate)} secondary={formatPaymentInfo(payment)} />
                          <Button color="secondary" variant="outlined" startIcon={<ShareIcon fontSize='small' />} onClick={() => generateImage(payment)} size="small" className="share-receipt-button">
                            Recipt
                          </Button>
                        </Grid>
                        <Grid item xs={3}>
                          <ListItemText primary={payment.amt} sx={{ textAlign: "end" }} />
                        </Grid>
                      </Grid>
                    </ListItem>
                  ))
                  }
                </List>
              </Collapse>
            </CardContent>
          </Card>
        </>
      ) : ""}
      <Box sx={{ position: 'fixed', bottom: "20px", right: "20px" }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
      {memberInfo ? (<Receipt ref={receiptSection} selectedPayment={selectedPayment} memberInfo={memberInfo} />) : '' }
    </div>
  );
}