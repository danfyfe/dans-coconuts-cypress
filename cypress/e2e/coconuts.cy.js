describe("Dan's Coconuts Live - Coconut Page", () => {
  it('loads when visited', () => {
    cy.visit('/coconuts')
  });

  it('adds a coconut when the add coconut button is clicked', () => {
    cy.visit('/coconuts').then(() => {
      cy.get('#add-coconut-btn').then(($btn) => {
        cy.wrap($btn).click().then(() => {
          cy.get('#coconut-0')
        })
      });
    })
  });
});
