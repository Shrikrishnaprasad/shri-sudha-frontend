import * as React from 'react';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { green, pink, blue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SaveIcon from '@mui/icons-material/Save';
import PaymentIcon from '@mui/icons-material/Payment';



export default function AdminRow(props) {

  const renewalMessage = "Thank you, your srisudha tamil magazine subscription has been renewed and valid till sep-2022"
  const [open, setOpen] = useState(false);
  const { member } = props;

  return (<>
              <TableRow
                key={member.rno}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                  >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {member.rno}
                </TableCell>
                <TableCell align="center">{member.mob}</TableCell>
                <TableCell align="center">{member.rdate}</TableCell>
                <TableCell align="center">{member.mname}</TableCell>
                <TableCell align="center">
                  {member.line1} <br />
                  {member.line2}
                </TableCell>
                <TableCell align="center">{member.city}</TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Avatar sx={{ bgcolor: pink[500] }}>
                      <AutorenewIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: green[500] }}>
                      <WhatsAppIcon onClick={() => window.open(`https://api.whatsapp.com/send?phone=91${member.mob}}&text=${renewalMessage}`, "_blank")}></WhatsAppIcon>
                    </Avatar>
                    <Avatar sx={{ bgcolor: blue[500] }}>
                      <PaymentIcon onClick={()=> props.handlePaymentDialog()} />
                  </Avatar>
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow >
                <TableCell className="admin-main-collapse" colSpan={12}>
                  <Collapse in={open} timeout="auto">
                    <h2 className="admin-main-collapse-header">Ref No : {member.rno}</h2>
                    <form >
                      <Box >
                        <Grid container rowSpacing={3} columnSpacing={3}>
                          <Grid item xs={4}>
                            < TextField color="secondary" label="Name" variant="outlined" value={member.mname} fullWidth />
                          </Grid>
                          <Grid item xs={4}>
                            < TextField color="secondary" label="Email" variant="outlined" value={member.email} fullWidth />
                          </Grid>
                          <Grid item xs={4}>
                            < TextField color="secondary" label="Mobile" variant="outlined" value={member.mob} fullWidth />
                          </Grid>
                          <Grid item xs={4}>
                            < TextField color="secondary" label="City" variant="outlined" value={member.city} fullWidth />
                          </Grid>
                          <Grid item xs={4}>
                            < TextField color="secondary" label="Pincode" variant="outlined" value={member.pincode} fullWidth />
                          </Grid>
                          <Grid item xs={4}>
                            <FormControl fullWidth>
                              <InputLabel id = "demo-simple-select-label" color="secondary">Mode</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Model"
                                color="secondary"
                              >
                                <MenuItem value={10}>Post</MenuItem>
                                <MenuItem value={20}>Direct</MenuItem>
                                <MenuItem value={30}>Online</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={8}>
                            <TextField
                              label="Address"
                              multiline
                              rows={3}
                              color="secondary"
                              value={`${member.line1} \n${member.line2}\n${member.city}-${member.pincode}`}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <FormControlLabel style={{paddingBottom: "15px", color: "black"}}
                              control={
                                <Switch name="deactivate" color="secondary"/>
                              }
                              label="Enabling this will deactivate the user"
                            />
                            <Button variant="contained" color="secondary" fullWidth size="large" startIcon={<SaveIcon />}>Save changes</Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </form>
                  </Collapse>
                </TableCell>
              </TableRow>
            </>)
}