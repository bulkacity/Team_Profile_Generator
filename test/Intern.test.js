const Intern = require("../lib/Intern");

test("Pull school after initiated", () => {
  const testValue = "rutgers";
  const e = new Intern("Bradley","Goldsworthy", 1, "bradley.goldsworthy@bulkacity.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Bradley","Goldsworthy", 1, "bradley.goldsworthy@bulkacity.com", "Rutgers");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Rutgers";
  const e = new Intern("Bradley","Goldsworthy", 1, "bradley.goldsworthy@bulkacity.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});