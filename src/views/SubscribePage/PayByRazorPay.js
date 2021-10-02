//import { Button } from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
const PayByRazorPay = ({ amount }) => {
  const history = useHistory();

  const options = {
    key: "rzp_test_YkCd4OxHtBFQbV", // api-key
    amount: amount * 100, //  = INR 1 = 100 (so * 100)
    name: "SHRI SUDHA",
    description: "Your Paying for Shri Sudha",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function (response) {
      //alert(response.razorpay_payment_id);
      alert("Payment successfully done");
    },
    prefill: {
      name: "",
      contact: "",
      email: "",
    },
    notes: {
      address: "some address",
    },
    theme: {
      color: "blue",
      hide_topbar: false,
    },
  };

  const openPayModal = () => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* <Button
        onClick={openPayModal}
        variant="contained"
        size="large"
        color="primary"
      >
        RazorPay
      </Button> */}
      <Button onClick={openPayModal} color="primary" size="lg">
        Subscribe
      </Button>
    </>
  );
};

export default PayByRazorPay;
