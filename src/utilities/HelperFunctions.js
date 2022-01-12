export const MONTHS_NAME = {
    0: 'JAN',
    1: 'FEB',
    2: 'MAR',
    3: 'APR',
    4: 'MAY',
    5: 'JUN',
    6: 'JUL',
    7: 'AUG',
    8: 'SEP',
    9: 'OCT',
    10: 'NOV',
    11: 'DEC'
  }

 export const formatDateWithMonthName = (recDate) => {
    let paymentDate = new Date(recDate);
    let formattedDate = paymentDate.getDate() + "-" + MONTHS_NAME[paymentDate.getMonth()] + "-" + (paymentDate.getFullYear() - 2000);
    return formattedDate;
  }

  export const formatDateToYYMMDD = (date) => {
    return date.split("T")[0];
    // console.log(date.getFullYear()+"-"+('0'+(date.getMonth()+1)).slice(-2)+"-"+('0'+date.getDate()).slice(-2))
    // return date.getFullYear()+"-"+('0'+(date.getMonth()+1)).slice(-2)+"-"+('0'+date.getDate()).slice(-2);
  }

  export const formatPaymentInfo = (payment) => {
    let formattedPaymentInfo = '';
    formattedPaymentInfo += payment.ptype;
    if (payment.bankname && payment.bankname != 'NIL')
      formattedPaymentInfo += "/" + payment.bankname;
    if (payment.tid && payment.tid != 'NIL')
      formattedPaymentInfo += "/" + payment.tid;
    return formattedPaymentInfo;
  }

  