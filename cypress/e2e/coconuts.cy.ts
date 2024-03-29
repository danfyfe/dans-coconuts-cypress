describe("Dan's Coconuts - Coconuts", () => {
  it('loads when visited', () => {
    cy.visit('/coconuts')
  });

  it('adds a coconut when the add coconut button is clicked', () => {
    cy.visit('/coconuts')
      .get('#add-coconut-btn')
      .click()
      .get('#coconut-0') // id is coconut-[index]
  });

  it('adds multiple coconuts when the add coconut button is clicked repeatedly', () => {
    cy.visit('/coconuts')
    .get('#add-coconut-btn')
    .click()
    .get('#coconut-0') // id is coconut-[index]
    .get('#add-coconut-btn')
    .click()
    .get('#coconut-1') // id is coconut-[index]
    .get('#add-coconut-btn')
    .click()
    .get('#coconut-2') // id is coconut-[index]
    .get('#add-coconut-btn')
    .click()
    .get('#coconut-3') // id is coconut-[index]
    .get('#add-coconut-btn')
    .click()
    .get('#coconut-4') // id is coconut-[index]
    .get('#add-coconut-btn')
    .click()
    .get('#coconut-5') // id is coconut-[index]
    .get('#add-coconut-btn')
    .click()
    .get('#coconut-6') // id is coconut-[index]
    .get('#add-coconut-btn')
    .click()
    .get('#coconut-7') // id is coconut-[index]
    .get('#add-coconut-btn')
    .click()
    .get('#coconut-8') // id is coconut-[index]
  });
});
