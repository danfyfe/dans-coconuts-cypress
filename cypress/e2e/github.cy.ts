describe("Dan's Coconuts - Github", () => {
  it('loads when visited', () => {
    cy.visit('/github')
  });

  it('renders page text content', () => {
    cy.visit('/github')
    .get('#github-content-container').as('container')
    .get('h1').should('have.text', 'GitHub Links')
    .get('@container')
    .get('hr')
    .get('@container')
    .get('p').then(($p) => {
      expect($p).to.have.length(2)
      expect($p.eq(0)).to.contain('Check out the repositories for this project')
      expect($p.eq(1)).to.contain('*This page is built using the GitHub GraphQL endpoint')
    });
  });

  // possibly flakey tests - relies on fetching of data from uncontrollable outside source
  // which would make test fail if unsuccessful
  it('renders three github links', () => {
    const githubBaseUrl = "https://github.com/danfyfe";
    cy.visit('/github')
    .get('#github-repo-links a').then(($links) => {
      expect($links).to.have.length(3)
      expect($links.eq(0)).to.contain('dans-coconuts-fe')
      expect($links.eq(0)).to.have.attr('href', `${githubBaseUrl}/dans-coconuts-fe`)
      expect($links.eq(1)).to.contain('dans-coconuts-be')
      expect($links.eq(1)).to.have.attr('href', `${githubBaseUrl}/dans-coconuts-be`)
      expect($links.eq(2)).to.contain('dans-coconuts-cypress')
      expect($links.eq(2)).to.have.attr('href', `${githubBaseUrl}/dans-coconuts-cypress`)
    })
  });
});
