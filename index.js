// Write your solution in this file!
const employee = { name: "mhamad", streetAddress: "mho" };
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmp = { ...employee };
  newEmp[key] = value;
  return newEmp;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const newEmp = { ...employee };
  newEmp[key] = undefined;
  return newEmp;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  employee[key] = undefined;
  return employee;
}
