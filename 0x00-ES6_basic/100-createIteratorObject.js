export default function createIteratorObject(report) {
    const employees = report.allEmployees;
    const employeeArray = [];


    for (const department in employees) {
        if (employees.hasOwnProperty(department)) {
            employeeArray.push(...employees[department]);
        }
    }

    function* employeeIterator() {
        for (const employee of employeeArray) {
            yield employee;
        }
    }

    return employeeIterator();
}
