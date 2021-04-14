describe("Currency converter", () => {
  beforeEach(() => {
    cy.intercept("GET", "latest?base=EUR*", { fixture: "eur.json" });
    cy.intercept("GET", "latest?base=USD*", { fixture: "usd.json" });
    cy.visit("/");
  });
  it("Converts from USD to AUD", () => {
    cy.getByTestId("source").select("USD");
    cy.getByTestId("target").select("AUD");
    cy.getByTestId("amount").type("40");
    cy.getByTestId("convert").click();
    cy.getByTestId("result").should("have.text", "52.629");
    cy.getByTestId("date").should("have.text", "2021-04-13");
  });

  it("Swap between currencies", () => {
    cy.getByTestId("amount").type("40");
    cy.getByTestId("swap").click();
    cy.getByTestId("convert").click();
    cy.getByTestId("result").should("have.text", "46.020");
  });
});
