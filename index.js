function startOver(){
  document.querySelector("form").style.visibility="visible"
  document.querySelector(".resultbox").style.visibility ="hidden"
}

function Increment() {
  let inc = Number(document.getElementById("days_did_it_last").innerText) + 1;
  if (inc <= 10) {
    document.getElementById("days_did_it_last").innerText = inc;
  }
}
function Decrement() {
  let dec = Number(document.getElementById("days_did_it_last").innerText) - 1;
  if (dec >= 0) {
    document.getElementById("days_did_it_last").innerText = dec;
  }
}

function Incrementcycleday() {
  document.getElementById("errormsg").innerText = "";
  let inc = Number(document.getElementById("periods_cycle").innerText) + 1;
  if (inc <= 35) {
    document.getElementById("periods_cycle").innerText = inc;
  } else {
    document.getElementById("errormsg").innerText =
      "According to the American College of Obstetricians and Gynecologists, a cycle length of 21-35 days is within the normal range. If your average cycle is below 21 days or above 35 days, we can’t calculate your estimated ovulation date because you may not be ovulating regularly. Speak to your health care provider for more information.";
  }
}

function Decrementcycleday() {
  document.getElementById("errormsg").innerText = "";
  let dec = Number(document.getElementById("periods_cycle").innerText) - 1;
  if (dec >= 21) {
    document.getElementById("periods_cycle").innerText = dec;
  } else {
    document.getElementById("errormsg").innerText =
      "According to the American College of Obstetricians and Gynecologists, a cycle length of 21-35 days is within the normal range. If your average cycle is below 21 days or above 35 days, we can’t calculate your estimated ovulation date because you may not be ovulating regularly. Speak to your health care provider for more information.";
  }
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  handlesubmit();
});

document.querySelector(".resultbox").style.visibility="hidden"

function handlesubmit() {
  document.querySelector(".resultbox").style.visibility ="visible"
  document.querySelector("form").style.visibility="hidden"
  let last_period_start_date =
    document.getElementById("last_period_date").value;
  let last_time_days = document.getElementById("days_did_it_last").innerHTML;
  let cycle_days = document.getElementById("periods_cycle").innerHTML;

  let start_date_of_last_period = last_period_start_date.slice(8, 10);
  let start_month_of_last_period = last_period_start_date.slice(5, 7);
  let start_year_of_last_period = last_period_start_date.slice(0, 4);

  let ovulation_days = Number(cycle_days) - 14;
  let month = [
    "JAN",
    "FEB",
    "MAR",
    "APRL",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SPET",
    "OCT",
    "NOV",
    "DEC",
  ];
  if (Number(start_date_of_last_period) + Number(ovulation_days) > 30) {
    let ovulation_date =
      Number(start_date_of_last_period) + Number(ovulation_days) - 30;

    let result1_ovulation_date = 0 + Number(ovulation_date);
    document.getElementById("ovulation_date_result").innerText =
      result1_ovulation_date + " " + month[Number(start_month_of_last_period)];
  } else {
    let date = Number(start_date_of_last_period) + Number(ovulation_days);

    let result1_ovulation_date = 0 + Number(date);
    document.getElementById("ovulation_date_result").innerText =
      result1_ovulation_date +
      " " +
      month[Number(start_month_of_last_period) - 1];
  }

  /////2nd ans logic

    let estimate_period_date_FROM =
      Number(start_date_of_last_period) + Number(cycle_days); //1+31=32
    let estimate_period_date_TO =
     Number(estimate_period_date_FROM) + Number(last_time_days);
     console.log(estimate_period_date_TO);
     console.log(last_time_days)

    if (estimate_period_date_FROM > 31) {
      estimate_period_date_FROM = estimate_period_date_FROM - 31 //add next month
      document.getElementById("estimated_period_dates_to").innerText = estimate_period_date_FROM + " " + month[Number(start_month_of_last_period)];
    }
    else{
      estimate_period_date_FROM =
      Number(start_date_of_last_period) + Number(cycle_days);//same mont
      document.getElementById("estimated_period_dates_to").innerText = estimate_period_date_FROM + " " + month[Number(start_month_of_last_period)-1];
    }
    if(estimate_period_date_TO >31){
      estimate_period_date_TO = estimate_period_date_TO - 31 //add next month
      document.getElementById("estimated_period_dates_from").innerText = estimate_period_date_TO + " " + month[Number(start_month_of_last_period)];
    }else{
      estimate_period_date_TO =
      estimate_period_date_FROM + Number(last_time_days); //same month
      document.getElementById("estimated_period_dates_from").innerText = estimate_period_date_TO + " " + month[Number(start_month_of_last_period)-1];
    }
}
