
//To calculate the monthly payment & monthly income
function calculate() {
  //to get monthly payment, formula is price/200
  var result = document.getElementById("price").value / 200;
  
  //to display the monthly payment
document.getElementById("result").innerHTML = "Estimate monthly payment is " + "<mark>" + "RM " + parseInt(result) + "</mark>" + " while";

  //to get monthly income, formula is monthly payment/60%
  var result2 = result / 0.6;

  //to display the monthly income
  document.getElementById("result2").innerHTML = "Minimum monthly income (exluding commitment with bank) should be around " + "<mark>" + "RM " + parseInt(result2) + "." + "</mark";
  
}

function reset() {
  //code to clear the price, result and result2
  document.getElementById("price").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("result2").innerHTML = "";
  
}

