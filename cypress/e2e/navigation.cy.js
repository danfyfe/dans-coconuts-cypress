describe("Dan's Coconuts - Navigation", () => {
  it('opens when nav trigger is clicked', () => {
    cy.visit('/')
      .get('#nav-link-menu-outer').as('outer')
      .should('have.class', 'opacity-0')
      .get('#nav-link-menu-inner').as('inner')
      .should('have.class', 'max-w-0')
      .get('#nav-trigger')
      .click()
      .get('@outer')
      .should('have.class', 'opacity-100')
      .get('@inner')
      .should('have.class', 'max-w-none')
  });

  it('should have the correct links', () => {
    // menu currently has Home and Coconuts links
    cy.visit('/')
    .get('#nav-link-menu-ul a').then(($links) => {
      expect($links).to.have.length(2)
      expect($links.eq(0)).to.contain('Home')
      expect($links.eq(0)).to.have.attr('href', '/')
      expect($links.eq(1)).to.contain('Coconuts')
      expect($links.eq(1)).to.have.attr('href', '/coconuts')
    })
  });
});
