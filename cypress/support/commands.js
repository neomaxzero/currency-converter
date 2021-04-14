Cypress.Commands.add("getByTestId", (testId) => {
  cy.get(`[test-id="${testId}"]`);
});
