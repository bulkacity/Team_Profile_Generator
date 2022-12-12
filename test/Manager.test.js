const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Pull office number after initializing", () => {
  const testValue = 100;
  const e = new Manager("Bradley","Goldsworthy", 1, "bradley.goldsworthy@bulkacity.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('Does ,getRole() return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Bradley","Goldsworthy", 1, "bradley.goldsworthy@bulkacity.com", testValue);
  expect(e.getRole()).toBe(testValue);
});

test("Pull office number using getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Bradley","Goldsworthy", 1, "bradley.goldsworthy@bulkacity.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});