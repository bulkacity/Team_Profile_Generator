const Employee = require("../lib/Employee");

test("Employee initiation, Expect new employee as object", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("getRole() should return role", () => {
    const testValue = "Employee";
    const e = new Employee("Bradley", 1, "bradleyGoldsworthy@bulkacity.com");
    expect(e.getRole()).toBe(testValue);
  });


test("Can get name via getName()", () => {
  const testValue = "Bradley";
  const testValueLast="Goldsworthy";
  const e = new Employee(testValue,testValueLast);
  expect(e.getName()).toBe(testValue+ ` ` +testValueLast);
});

test("Can get id via getId()", () => {
  const testValue = 1;
  const e = new Employee("Bradley","Goldsworthy", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "bradley.goldsworthy@bulkacity.com";
  const e = new Employee("bradley","goldsworthy", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

