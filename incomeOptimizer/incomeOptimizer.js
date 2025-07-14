function calcMileage(){
    let totalMiles=document.getElementById('totalMiles').value;
    let workMiles=document.getElementById('workMiles').value;
    let expenses=document.getElementById('estimate').value;
    let percentage=workMiles/totalMiles;
    let standard = workMiles*.7;
    document.getElementById('resultS').innerHTML ='$' + standard.toFixed(2);
    let actual= percentage*expenses;
    document.getElementById('resultA').innerHTML ='$' + actual.toFixed(2);
    document.getElementById('workPercent').innerHTML=percentage*100+'%';
}

function calcIncome(){
    let payIncome=parseFloat(document.getElementById('paycheck-income').value);
    let seIncome=parseFloat(document.getElementById('se-income').value);
    let otherIncome=parseFloat(document.getElementById('other-income').value);
    let vehExpenses=parseFloat(document.getElementById('vehicle-expenses').value);
    let otherExp=parseFloat(document.getElementById('other-work-expenses').value);
    let usePercent=parseFloat(document.getElementById('vehicle-use').value)/100;
    let deductible=(vehExpenses*usePercent)+otherExp;
    let income=payIncome+seIncome+otherIncome;
    let actualEarnings=income-deductible;
    document.getElementById('resultINC').innerHTML='$' + actualEarnings.toFixed(2);
}