/// <reference types="cypress" />
before(function () {
  cy.fixture("example.json").as("test_data");
});
it("Read files using Fixture", function () {
  cy.fixture("example.json").then((data) => {
    cy.log(data.name);
    cy.log(data.email);
    cy.fixture("example").its("name").should("contains", "Using");
  });
  cy.log(this.test_data.name);
});

it("Read file using readFile()", function () {
  cy.readFile("./cypress/fixtures/example.json").then((data) => {
    cy.log(data.email);
    cy.readFile("./cypress/fixtures/example.json")
      .its("name")
      .should("eq", "Using fixtures to represent data");
  });
});

it("Write json file demo", function () {
  cy.writeFile("sample.json", '{"name": "product name is cola"}');
});

it("Write txt file demo", function () {
  cy.writeFile("sample.txt", "product name is cola \n");
  cy.writeFile("sample.txt", "product name is pepsi \n", { flag: "a+" });
  cy.writeFile("sample.txt", "product name is orange", { flag: "a+" });
});

it("Read file with .json file", function () {
  cy.readFile("sample.json").then((data) => {
    cy.log(data.name);
    cy.readFile("sample.json").its("name").should("contains", "cola");
  });
});

it("Read file with .txt file", function () {
  cy.readFile("sample.txt").then((data) => {
    cy.log(data.name);
    cy.readFile("sample.txt").should("contains", "cola");
  });
});
