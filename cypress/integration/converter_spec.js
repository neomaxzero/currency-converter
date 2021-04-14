describe("Currency converter", () => {
  beforeEach(() => {
    cy.intercept("GET", "latest?base=EUR*", { fixture: "eur.json" });
    cy.intercept("GET", "latest?base=USD*", { fixture: "usd.json" });
    cy.visit("/");
  });
  it("Converts from USD to AUD", () => {
    cy.get('[test-id="source"]').select("USD");
    cy.get('[test-id="target"]').select("AUD");
    cy.get('[test-id="amount"]').type("40");
    cy.get('[test-id="convert"]').click();
    cy.get('[test-id="result"]').should("have.text", "52.629");
    cy.get('[test-id="date"]').should("have.text", "2021-04-13");
  });

  it("Swap between currencies", () => {
    cy.get('[test-id="amount"]').type("40");
    cy.get('[test-id="swap"]').click();
    cy.get('[test-id="convert"]').click();
    cy.get('[test-id="result"]').should("have.text", "46.020");
  });
});
