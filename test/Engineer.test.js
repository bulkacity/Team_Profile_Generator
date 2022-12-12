const Engineer = require("../lib/Engineer");

test("Pull github account", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Bradley","Goldsworthy", 1, "bradley.goldsworthy@bulkacity.com", testValue);
  expect(e.github).toBe(testValue);
});

test("Does getRole() pull title?", () => {
  const testValue = "Engineer";
  const e = new Engineer("Bradley","Goldsworthy", 1, "bradley.goldsworthy@bulkacity.com", testValue);
  expect(e.getRole()).toBe(testValue);
});

test("Pull via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Bradley","Goldsworthy", 1, "bradley.goldsworthy@bulkacity.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});