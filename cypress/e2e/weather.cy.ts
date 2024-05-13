describe("Dan's Coconuts - Weather", () => {
  it('weather button toggles the weather when clicked', () => {
    cy.visit('/')
      .get('#weather-widget-btn')
      .click()
      .get('#weather-btn')
      .click()
      .get('#rain')
  });

  it('weather carries over on route change', () => {
    cy.visit('/')
    .get('#weather-widget-btn')
    .click()
    .get('#weather-btn')
    .click()
    .get('#rain')
    .visit('/coconuts')
    .get('#rain')
  });

  it('remembers the weather state on different visits or refresh', () => {
    cy.visit('/')
    .get('#weather-widget-btn')
    .click()
    .get('#weather-btn')
    .click()
    .get('#rain')
    .visit('https://www.danscoconuts.com')
    .visit('/')
    .get('#rain')
  });
});
