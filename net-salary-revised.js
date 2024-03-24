//function for income tax bands 
//declaring the variables that will hold the user input from the form submission
/*
let basicPay = document.getElementById('basicPayInput').value;
let benefits = document.getElementById('benefitsInput').value;
let grossSalaryOutput = document.getElementById('grossSalaryResult').value;
let payeOutput = document.getElementById('payeResult').value;
let nhifOutput = document.getElementById('nhifResult').value;
let nssfOutput = document.getElementById('nssfResult').value;
//assigning the button a variable so that i can make it interactive
let submitPayDetails = document.getElementById('submitPayDetails');
*/

/*
//function to calculate gross salary 
// Assigning an event listener to the submit button
document.getElementById("submitPayDetails").onclick = function() { 
    // Inside this function, we now fetch the latest values of form inputs
    let basicPay = document.getElementById('basicPayInput').value;
    let benefits = document.getElementById('benefitsInput').value;
    //equation to determine gross pay and evaluate and return paye deduction
    gross = parseFloat(basicPay) + parseFloat(benefits);
    if (gross > 800000) {
        return  (document.getElementById("payeResult").textContent = `${"Your Paye Deduction is: "}${gross * 0.35}`)
    } else if (gross > 500000) {
        return  (document.getElementById("payeResult").textContent = `${"Your Paye Deduction is: "}${gross * 0.325}`)
    } else if (gross >= 32334) {
        return  (document.getElementById("payeResult").textContent = `${"Your Paye Deduction is: "}${gross * 0.30}`)
    } else if (gross >= 24001) {
        return  (document.getElementById("payeResult").textContent = `${"Your Paye Deduction is: "}${gross * 0.25}`)
    } else if (gross >= 0) {
        return  (document.getElementById("payeResult").textContent = `${"Your Paye Deduction is: "}${gross * 0.10}`)
    } //else {
        //return "Invalid Input, try again"
    }
//similar script for nhif
//event listener to listen for when the button is clicked
    if (gross >= 100000) {
        return  (document.getElementById("nhifResult").textContent = "Your NHIF Deduction is: 1700")
    } else if (gross >= 90000) {
        return  (document.getElementById("nhifResult").textContent = "Your NHIF Deduction is: 1600")
    } else if (gross >= 80000) {
        return  (document.getElementById("nhifResult").textContent = "Your NHIF Deduction is: 1500")
    } else if (gross >= 70000) {
        return  (document.getElementById("nhifResult").textContent = "Your NHIF Deduction is: 1400")
    } else if (gross >= 60000) {
        return  (document.getElementById("nhifResult").textContent = "Your NHIF Deduction is: 1300")
    } else if (gross >= 50000) {
        return  (document.getElementById("nhifResult").textContent = "Your NHIF Deduction is: 1200")
    } else if (gross >= 45000) {
        return  (document.getElementById("nhifResult").textContent = "Your NHIF Deduction is: 1100")
    } else if (gross >= 40000) {
        return  (document.getElementById("nhifResult").textContent = "Your NHIF Deduction is: 1000")
    } else if (gross >= 35000) {
        return  (document.getElementById("nhifResult").textContent = "Your NHIF Deduction is: 950")
    } else if (gross >= 30000) {
        return  (document.getElementById("nhifResult").textContent = "Your NHIF Deduction is: 900")
    } else if (gross >= 25000) {
        return  (document.getElementById("nhifResult").textContent = "Your NHIF Deduction is: 850")
    } else if (gross >= 20000) {
        return  (document.getElementById("nhifResult").textContent = "Your NHIF Deduction is: 750")
    } else if (gross >= 15000) {
        return  (document.getElementById("nhifResult").textContent  = "Your NHIF Deduction is: 600")
    } else if (gross >= 12000) {
        return  (document.getElementById("nhifResult").textContent = "Your NHIF Deduction is: 500")
    } else if (gross >= 8000) {
        return  (document.getElementById("nhifResult").textContent = "Your NHIF Deduction is: 400")
    } else if (gross >= 6000) {
        return  (document.getElementById("nhifResult").textContent = "Your NHIF Deduction is: 300")
    } else if (gross >= 0) {
        return  (document.getElementById("nhifResult").textContent = "Your NHIF Deduction is: 150")
    } //else {
        //return "Invalid Input, try again"
//similar script for nssf
//event listener to listen for when the button is clicked
    if (gross > 36000) {
        return (document.getElementById("nssfResult").textContent = "Pension Exempt")
    } else if (gross <=36000 ) {
        return  (document.getElementById("nssfResult").textContent = `${"Tier II NSSF Contribution is "}${gross*0.06}`)
    } else if (gross <=7000 ) {
        return  (document.getElementById("nssfResult").textContent = `${"Tier I NSSF Contribution is "}${gross*0.06}`)
    } else if (gross >= 0 ) {
        return  (document.getElementById("nssfResult").textContent = `${"Tier I NSSF Contribution is "}${gross*0.06}`)
    } //else {
        //return "Invalid Input, try again"
//calculate net salary
    let net = gross -(NHIF() + NSSF())
    document.getElementById("netSalaryResult").textContent = `Your Net Salary is: ${net}`;
*/

// Assigning an event listener to the submit button
document.getElementById("submitPayDetails").onclick = function() { 
    // Inside this function, we now fetch the latest values of form inputs
    let basicPay = parseFloat(document.getElementById('basicPayInput').value);
    let benefits = parseFloat(document.getElementById('benefitsInput').value);
    
    //equation to determine gross pay
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
    document.getElementById("payeResult").textContent = `Your Paye Deduction is: ${paye}`;
    document.getElementById("nhifResult").textContent = `Your NHIF Deduction is: ${nhif}`;
    document.getElementById("nssfResult").textContent = `Your NSSF Deduction is: ${nssf}`;
    
    // Calculate net salary
    let net = gross - (paye + nhif + nssf);
    document.getElementById("netSalaryResult").textContent = `Your Net Salary is: ${net}`;
}
