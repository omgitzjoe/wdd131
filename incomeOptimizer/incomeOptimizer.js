function calcMileage(){
    let totalMiles=parseFloat(document.getElementById('totalMiles').value);
    let workMiles=parseFloat(document.getElementById('workMiles').value);
    let expenses=parseFloat(document.getElementById('estimate').value);
    let percentage=workMiles/totalMiles;    
    let standard = workMiles*.7;
    if (totalMiles>=workMiles){
        document.getElementById('resultS').innerHTML ='$' + standard.toFixed(2);
        let actual= percentage*expenses;
        document.getElementById('resultA').innerHTML ='$' + actual.toFixed(2);
        document.getElementById('workPercent').innerHTML=percentage*100+'%';
    } else{
        document.getElementById('resultS').innerHTML='ERROR'
        document.getElementById('resultA').innerHTML='CHECK'
        document.getElementById('workPercent').innerHTML='MILES'
    }
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
    if (actualEarnings>0){
    document.getElementById('resultINC').innerHTML='$' + actualEarnings.toFixed(2);
    } else {
        document.getElementById('resultINC').innerHTML='0.00';
    }
}