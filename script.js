document.addEventListener("DOMContentLoaded", () => {
  // Conversion Functions
  document.getElementById("convertTempButton").addEventListener("click", convertTemperature);
  document.getElementById("convertLengthButton").addEventListener("click", convertLength);

  function convertTemperature() {
    const tempInput = document.getElementById("tempInput").value;
    const tempSelect = document.getElementById("tempSelect").value;
    let result;

    if (tempSelect === "cToF") {
      result = (tempInput * 9 / 5) + 32;
      document.getElementById("tempResult").textContent = `${tempInput}°C = ${result.toFixed(2)}°F`;
    } else if (tempSelect === "fToC") {
      result = (tempInput - 32) * 5 / 9;
      document.getElementById("tempResult").textContent = `${tempInput}°F = ${result.toFixed(2)}°C`;
    }
  }

  function convertLength() {
    const lengthInput = document.getElementById("lengthInput").value;
    const lengthSelect = document.getElementById("lengthSelect").value;
    let result;

    if (lengthSelect === "mToF") {
      result = lengthInput * 3.28084;
      document.getElementById("lengthResult").textContent = `${lengthInput} meters = ${result.toFixed(2)} feet`;
    } else if (lengthSelect === "fToM") {
      result = lengthInput / 3.28084;
      document.getElementById("lengthResult").textContent = `${lengthInput} feet = ${result.toFixed(2)} meters`;
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Income Tax Calculation
  document.getElementById("calculateTaxButton").addEventListener("click", calculateTax);

  function calculateTax() {
    const income = parseFloat(document.getElementById("incomeInput").value);
    let tax = 0;

    if (income <= 250000) {
      tax = 0;
    } else if (income <= 400000) {
      tax = (income - 250000) * 0.15;
    } else if (income <= 800000) {
      tax = (income - 400000) * 0.2 + 22500;
    } else if (income <= 2000000) {
      tax = (income - 800000) * 0.25 + 102500;
    } else if (income <= 8000000) {
      tax = (income - 2000000) * 0.3 + 402500;
    } else {
      tax = income * 0.35 ; 
    }

    document.getElementById("taxResult").textContent = `Your tax is: ₱${tax.toFixed(2)}`;
  }
});


document.addEventListener("DOMContentLoaded", () => {
  // Factorial and Sum/Average Functions
  document.getElementById("calculateFactorialButton").addEventListener("click", calculateFactorial);
  document.getElementById("calculateSumAverageButton").addEventListener("click", calculateSumAverage);

  function calculateFactorial() {
    const n = parseInt(document.getElementById("nInput").value);
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }

    document.getElementById("factorialResult").textContent = `Factorial of ${n} is: ${factorial}`;
  }

  function calculateSumAverage() {
    const n = parseInt(document.getElementById("nInput").value);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      sum += i;
    }

    let average = sum / n;
    document.getElementById("sumResult").textContent = `Sum of first ${n} numbers: ${sum}`;
    document.getElementById("averageResult").textContent = `Average: ${average.toFixed(2)}`;
  }
});


document.addEventListener("DOMContentLoaded", () => {
  // Payroll Calculation
  document.getElementById("calculatePayrollButton").addEventListener("click", calculatePayroll);

  function calculatePayroll() {
    const hoursWorked = parseFloat(document.getElementById("hoursInput").value);
    const hourlyRate = parseFloat(document.getElementById("rateInput").value);
    const payroll = hoursWorked * hourlyRate;

    document.getElementById("payrollResult").textContent = `Total Payroll: ₱${payroll.toFixed(2)}`;
  }
});
