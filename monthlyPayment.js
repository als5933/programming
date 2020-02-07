var $ = function (id) 
{
    return document.getElementById(id);
};



function calculate_click ()
 {

   //stringFullName, floatInitialLoanAmount, floatNumberOfMonths, floatAnnualInterest;
   var stringFullName = parseString($("full_name").value);
   var floatInitialLoanAmount = parseFloat($("initial_loan_amount").value);
    var floatNumberOfMonths = parseFloat($("number_of_months").value);
    var floatAnnualInterest = (parseFloat($("annual_interest").value))/100;
    var floatMonthlyInterest = floatAnnualInterest/12;
    var floatMonthlyPayment = floatInitialLoanAmount * ((floatMonthlyInterest)/(1-(1+floatMonthlyInterest)^(-floatNumberOfMonths)));
    $("monthly_payment").value= floatMonthlyPayment;
    $("monthly_payment").value= "$" + floatMonthlyPayment.toFixed(2);
  
    return false; 
  
    
 }
 
 window.onload = function () 
{
    //$("full_name").value = "";
     //$("initial_loan_amount").value = "";
    //$("number_of_months").value = "";
     //$("annual_interest").value = "";
      $("monthly_payment").value = "";
    //$("monthly_payment").focus();
};



//<fieldset>
          //  <label>&nbsp; </label> 
          //<input type="button" id="calc_monthly_payment" value="Calculate" /><br />
// </fieldset>