describe("Dan's Coconuts - Navigation", () => {
  it('opens when nav trigger is clicked', () => {
    cy.visit('/')
      .get('#link-nav-menu-outer').as('outer')
      .should('have.class', 'opacity-0 invisible')
      .get('#nav-trigger')
      .click()
      .get('@outer')
      .should('have.class', 'opacity-100 visible')
  });

  it('should have the correct links', () => {
    cy.visit('/')
    .get('#nav-link-menu-ul a').then(($links) => {
      expect($links).to.have.length(6)
      expect($links.eq(0)).to.contain('Home')
      expect($links.eq(0)).to.have.attr('href', '/')
      expect($links.eq(1)).to.contain('Coconuts')
      expect($links.eq(1)).to.have.attr('href', '/coconuts')
      expect($links.eq(2)).to.contain('Task Management (WIP)')
      expect($links.eq(2)).to.have.attr('href', '/task-management')
      expect($links.eq(3)).to.contain('GitHub')
      expect($links.eq(3)).to.have.attr('href', '/github')
      expect($links.eq(4)).to.contain('Contact')
      expect($links.eq(4)).to.have.attr('href', '/contact')
      expect($links.eq(5)).to.contain('Sign In')
      expect($links.eq(5)).to.have.attr('href', '/signin?referer=/')
    })
  });
});
