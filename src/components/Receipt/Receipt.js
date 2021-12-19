import React from 'react';
import receipt_logo from 'assets/img/ss/logo/receipt_logo.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Grid from '@mui/material/Grid';
import {formatPaymentInfo, formatDateWithMonthName} from '../../utilities/HelperFunctions.js';

const Receipt = React.forwardRef(function receipt(props, refs){
    const {selectedPayment, memberInfo} = props;
    return (
        <section id="receipt" ref={refs}  style={{display: 'none'}} className='receipt-container'>
            <div className="receipt-header">
                <div>
                    <img src={receipt_logo} width={150} height={200} alt="logo" />
                </div>
                <div className='receipt-ss-contact-info'>
                    <h2>SHRI SUDHA TAMIL MAGAZINE</h2>
                    <div>
                        16, Vyasaraja Nagar, Srirangam - 620006 (T.N)
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className='d-flex'><MailOutlineIcon /> <span style={{ marginLeft: '12px' }}>shrisudhatamil@gmail.com</span></div>
                            <div className='d-flex'><WhatsAppIcon /> <span style={{ marginLeft: '12px' }}>8667543221</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="receipt-body">
                <h3 className='receipt-body-header'>
                    <div>Receipt Information</div>
                    <div>Date: {formatDateWithMonthName(selectedPayment.recdate)}</div>
                </h3>
                <Grid container spacing={2} sx={{ fontSize: "22px", padding: "12px" }}>
                    <Grid item xs={6}>
                        Receipt No
                    </Grid>
                    <Grid item xs={6}>
                        {selectedPayment.suid}
                    </Grid>
                    <Grid item xs={6}>
                        Reference No
                    </Grid>
                    <Grid item xs={6}>
                        {selectedPayment.rno}
                    </Grid>
                    <Grid item xs={6}>
                        Name
                    </Grid>
                    <Grid item xs={6}>
                        {memberInfo.mname}
                    </Grid>
                    <Grid item xs={6}>
                        Mobile
                    </Grid>
                    <Grid item xs={6}>
                        {memberInfo.mob}
                    </Grid>
                    <Grid item xs={6}>
                        Address
                    </Grid>
                    <Grid item xs={6} style={{ lineHeight: '1.7' }}>
                        <div>{memberInfo.line1},</div>
                        <div>{memberInfo.line2},</div>
                        <div>{memberInfo.city} - {memberInfo.pincode}</div>
                    </Grid>
                    <Grid item xs={6}>
                        Shrisudha valid till
                    </Grid>
                    <Grid item xs={6}>
                        {formatDateWithMonthName(selectedPayment.exdate).slice(3)}
                    </Grid>
                </Grid>
            </div>
            <div className="receipt-body">
                <h3 className='receipt-body-header'>
                    <div>Payment Information</div>
                </h3>
                <Grid container spacing={1} sx={{ fontSize: "22px", padding: "12px" }}>
                    <Grid item xs={6}>
                        Amount
                    </Grid>
                    <Grid item xs={6}>
                        {selectedPayment.amt}
                    </Grid>
                    <Grid item xs={6}>
                        Payment mode
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                           {formatPaymentInfo(selectedPayment)}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </section>
 )
});

export default Receipt;