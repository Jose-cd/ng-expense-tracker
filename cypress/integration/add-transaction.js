/* eslint-disable no-console */
const getAngular = () => cy.window().its("angular");

const getElementScope = (selector) => {
  return cy
    .get(selector)
    .then(($el) => getAngular().then((ng) => ng.element($el).scope()));
};

const getElementInjector = (selector) => {
  return cy
    .get(selector)
    .then(($el) => getAngular().then((ng) => ng.element($el).injector()));
};

describe("add transaction feature", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("adds transaction", () => {
    const transactionTitle = "Salary";
    const transactionValue = 300;

    cy.get('[placeholder="Enter text..."]').type(transactionTitle);
    cy.get('[placeholder="Enter amount..."]').type(
      `{backspace}${transactionValue}{enter}`
    );

    //asserts
    cy.get(".list li").should("have.length", 1); // tener 1 todo
    cy.get(".list li")
      .first()
      .should("have.text", ` ${transactionTitle}  + $${transactionValue}  x `);
    cy.get(".list li").should("have.length", 1);
  });
});
