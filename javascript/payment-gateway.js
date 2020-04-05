function pay()
{
    var num; var exp; var yo;
    var ccv;
    num = document.paymentfrm.cardnum.value;
    exp = document.paymentfrm.expireMM.value;
    yo = document.paymentfrm.expireYYYY.value;
    ccv = document.paymentfrm.ccv.value;

//CARD NUMBER
    if(num == "" || (num.length < 16 || num.length >16)){
        alert("Please enter a valid card number");
    }
    
//EXPIRY
    if(exp == "MM"){
        alert("Please enter a valid expiry");
    }else if(yo == "YYYY"){
        alert("Please enter a valid expiry");
    }

//CVV
    if(ccv== "" || (ccv.length < 3)){
    alert("Please enter CVV/CVC2 number");
    }
    
}
