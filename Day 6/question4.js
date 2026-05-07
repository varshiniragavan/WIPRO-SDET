const employees = [

  { id: 101, name: "Alice", salary: 6000 },

  { id: 102, name: "Bob", salary: 3500 },

  { id: 103, name: "Charlie", salary: 5200 }

];

function taxLogic(salary) {

  if (salary > 5000) {
    return salary * 0.20;
  } else {
    return salary * 0.10;
  }

}

function calculatePayroll(employees, taxCallback) {

  setTimeout(() => {

    const processedEmployees = employees.map((employee) => {

      const tax = taxCallback(employee.salary);

      const netSalary = employee.salary - tax;

      return {
        ...employee,
        tax,
        netSalary,
        status: netSalary > 4000 ? "Premium" : "Standard"
      };

    });

    const totalNetPayout = processedEmployees.reduce((total, emp) => {

      return total + emp.netSalary;

    }, 0);

    console.log(
      `Payroll Processed: Total Net Payout is $${totalNetPayout} for ${processedEmployees.length} employees.`
    );

    console.log(processedEmployees);

  }, 2000);

}

calculatePayroll(employees, taxLogic);