//Even though the objective is similar to the other two, this time round we are going to have all the display details in one section to declutter the code
//starting by Assigning an event listener to the submit button
document.getElementById("submitPayDetails").onclick = function() { 
    // Inside this function, we now fetch the latest values of form inputs
    let basicPay = parseFloat(document.getElementById('basicPayInput').value);
    let benefits = parseFloat(document.getElementById('benefitsInput').value);
    
    //equation to determine gross pay
    //all other calculations will use gross as basis
    let gross = basicPay + benefits;
    
    // Function to calculate PAYE Deduction
    function calculatePAYE(gross) {
        if (gross > 800000) {
            return gross * 0.35;
        } else if (gross > 500000) {
            return gross * 0.325;
        } else if (gross >= 32334) {
            return gross * 0.30;
        } else if (gross >= 24001) {
            return gross * 0.25;
        } else if (gross >= 0) {
            return gross * 0.10;
        } else {
            return 0; // Invalid Input
        }
    }
    
    // Function to calculate NHIF Deduction
    function calculateNHIF(gross) {
        if (gross >= 100000) {
            return 1700;
        } else if (gross >= 90000) {
            return 1600;
        } else if (gross >= 80000) {
            return 1500;
        } else if (gross >= 70000) {
            return 1400;
        } else if (gross >= 60000) {
            return 1300;
        } else if (gross >= 50000) {
            return 1200;
        } else if (gross >= 45000) {
            return 1100;
        } else if (gross >= 40000) {
            return 1000;
        } else if (gross >= 35000) {
            return 950;
        } else if (gross >= 30000) {
            return 900;
        } else if (gross >= 25000) {
            return 850;
        } else if (gross >= 20000) {
            return 750;
        } else if (gross >= 15000) {
            return 600;
        } else if (gross >= 12000) {
            return 500;
        } else if (gross >= 8000) {
            return 400;
        } else if (gross >= 6000) {
            return 300;
        } else if (gross >= 0) {
            return 150;
        } else {
            return 0; // Invalid Input
        }
    }
    
    // Function to calculate NSSF Deduction
    function calculateNSSF(gross) {
        if (gross > 36000) {
            return 0; // Pension Exempt
        } else {
            return gross * 0.06;
        }
    }
    
    // Calculate deductions
    let paye = calculatePAYE(gross);
    let nhif = calculateNHIF(gross);
    let nssf = calculateNSSF(gross);
    
    // Display results
    document.getElementById("grossSalaryResult").textContent = `Your  Gross Salary is: Kshs ${gross}`; 
    document.getElementById("payeResult").textContent = `Your Paye Deduction is: ${paye}`;
    document.getElementById("nhifResult").textContent = `Your NHIF Deduction is: ${nhif}`;
    document.getElementById("nssfResult").textContent = `Your NSSF Deduction is: ${nssf}`;
    
    // Calculate net salary
    let net = gross - (paye + nhif + nssf);
    document.getElementById("netSalaryResult").textContent = `Your Net Salary is: ${net}`;
}
