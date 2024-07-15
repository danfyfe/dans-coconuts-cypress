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
      expect($p).to.have.length(4)
      expect($p.eq(0)).to.contain('Check out my pinned repositories')
      expect($p.eq(1)).to.contain('Click here for the main profile page')
      expect($p.eq(2)).to.contain('Unfortunately, most past professional work experience and projects cannot be shared here, but I am happy to do a walkthrough. Reach out through the contact page.')
      expect($p.eq(3)).to.contain('*This page is built using the GitHub GraphQL endpoint')
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
      expect($links.eq(1)).to.contain('dans-coconuts-cypress')
      expect($links.eq(1)).to.have.attr('href', `${githubBaseUrl}/dans-coconuts-cypress`)
      // expect($links.eq(2)).to.contain('dans-coconuts-nightwatch')
      // expect($links.eq(2)).to.have.attr('href', `${githubBaseUrl}/dans-coconuts-nightwatch`)
      expect($links.eq(2)).to.contain('web-dev-components')
      expect($links.eq(2)).to.have.attr('href', `${githubBaseUrl}/web-dev-components`)
    })
  });
});
