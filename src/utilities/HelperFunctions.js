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

  export const formatPaymentInfo = (payment) => {
    let formattedPaymentInfo = '';
    formattedPaymentInfo += payment.ptype;
    if (payment.bankname != 'NIL')
      formattedPaymentInfo += "/" + payment.bankname;
    if (payment.tid != 'NIL')
      formattedPaymentInfo += "/" + payment.tid;
    return formattedPaymentInfo;
  }

  