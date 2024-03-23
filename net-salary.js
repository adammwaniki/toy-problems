//function for income tax bands 
let monthlyTaxablePay;
document.getElementById ("submitPayDetails").onclick = function calculateMonthlyIncomeTax (paye) {
    monthlyTaxablePay = document.getElementById("grossSalaryResult").value;
    if (monthlyTaxablePay > 800000) {
        return  (document.getElementById("payeResult").textContent`${paye = (monthlyTaxablePay * 0.35)}`) 
    } else if (monthlyTaxablePay > 500000) {
        return  (document.getElementById("payeResult").textContent`${paye = (monthlyTaxablePay * 0.325)}`)
    } else if (monthlyTaxablePay >= 32334) {
        return  (document.getElementById("payeResult").textContent`${paye = (monthlyTaxablePay * 0.30)}`)
    } else if (monthlyTaxablePay >= 24001) {
        return  (document.getElementById("payeResult").textContent`${paye = (monthlyTaxablePay * 0.25)}`)
    } else if (monthlyTaxablePay >= 0) {
        return  (document.getElementById("payeResult").textContent`${paye = (monthlyTaxablePay * 0.10)}`)
    } else {
        return "Invalid Input, try again"
    }
}

//function for health insurance deduction bands
document.getElementById ("submitPayDetails").onclick = function calculateHealthInsurance (nhif) {
    monthlyTaxablePay = document.getElementById("grossSalaryResult").value;
    if (monthlyTaxablePay >= 100000) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 1700)}`)
    } else if (monthlyTaxablePay >= 90000) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 1600)}`)
    } else if (monthlyTaxablePay >= 80000) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 1500)}`)
    } else if (monthlyTaxablePay >= 70000) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 1400)}`)
    } else if (monthlyTaxablePay >= 60000) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 1300)}`)
    } else if (monthlyTaxablePay >= 50000) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 1200)}`)
    } else if (monthlyTaxablePay >= 45000) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 1100)}`)
    } else if (monthlyTaxablePay >= 40000) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 1000)}`)
    } else if (monthlyTaxablePay >= 35000) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 950)}`)
    } else if (monthlyTaxablePay >= 30000) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 900)}`)
    } else if (monthlyTaxablePay >= 25000) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 850)}`)
    } else if (monthlyTaxablePay >= 20000) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 750)}`)
    } else if (monthlyTaxablePay >= 15000) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 600)}`)
    } else if (monthlyTaxablePay >= 12000) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 500)}`)
    } else if (monthlyTaxablePay >= 8000) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 400)}`)
    } else if (monthlyTaxablePay >= 6000) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 300)}`)
    } else if (monthlyTaxablePay >= 0) {
        return  (document.getElementById("nhifResult").textContent`${(nhif = 150)}`)
    } else {
        return "Invalid Input, try again"
    }
}

// function to calculate NSSF contribution based on the taxable pay of an employee.
document.getElementById ("submitPayDetails").onclick = function calculatePensionablePay (nssf) {
    monthlyTaxablePay = document.getElementById("grossSalaryResult").value;
    if (monthlyTaxablePay > 36000) {
        return (document.getElementById("nssfResult").textContent `${"Pension Exempt"}`)
    } else if (monthlyTaxablePay <=36000 ) {
        return  (document.getElementById("nssfResult").textContent `${"Tier II", nssf = monthlyTaxablePay * 0.06}`)
    } else if (monthlyTaxablePay <=7000 ) {
        return  (document.getElementById("nssfResult").textContent `${"Tier I", nssf = monthlyTaxablePay * 0.06}`)
    } else if (monthlyTaxablePay >= 0 ) {
        return  (document.getElementById("nssfResult").textContent `${"Tier I", nssf = monthlyTaxablePay * 0.06}`)
    } else {
        return "Invalid Input, try again"
    }
}

//function to calculate net salary
function calculateNetSalary (basicPay, benefits,nssf,nhif,paye) {
    const grossSalary  = basicPay + benefits;
    const healthInsuranceDeduction =  calculateHealthInsurance (nhif);
    const socialSecurityContribution = calculatePensionablePay (nssf);
    const incomeTaxDeduction = calculateMonthlyIncomeTax(paye);
    const netSalary = (grossSalary -(healthInsuranceDeduction + socialSecurityContribution + incomeTaxDeduction))
    return netSalary;
}

//prompt that user can interact with to input  their data and find out the corresponding deductions
