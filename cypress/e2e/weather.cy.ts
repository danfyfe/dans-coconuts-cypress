describe("Dan's Coconuts - Weather", () => {
  it('weather button toggles the weather when clicked', () => {
    cy.visit('/')
    .get('#home-close-modal').click() // close tour welcome modal
    .get('#weather-widget-btn')
    .click()
    .get('#weather-btn')
    .click()
    .get('#rain')
  });

  it('weather carries over on route change', () => {
    cy.visit('/')
    .get('#home-close-modal').click() // close tour welcome modal
    .get('#weather-widget-btn')
    .click()
    .get('#weather-btn')
    .click()
    .get('#rain')
    .visit('/github')
    .get('#rain')
  });

  it('remembers the weather state on different visits or refresh', () => {
    cy.visit('/')
    .get('#home-close-modal').click() // close tour welcome modal
    .get('#weather-widget-btn')
    .click()
    .get('#weather-btn')
    .click()
    .get('#rain')
    .visit('/')
    .get('#home-close-modal').click() // close tour welcome modal
    .get('#rain')
  });
});
