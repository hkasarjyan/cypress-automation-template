/// <reference types = "cypress"/>
/// <reference types="cypress-downloadfile"/>

it("File Upload Test", function () {
  cy.visit("https://trytestingthis.netlify.app");
  cy.get("#myfile").attachFile("example.json");
});

it("File Download Test", function () {
  cy.downloadFile(
    "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
    "mydownloads",
    "example.jpg"
  );
});
