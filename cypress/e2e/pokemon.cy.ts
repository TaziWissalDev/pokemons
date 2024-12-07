describe('Pokemon App E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads and displays pokemon cards', () => {
    cy.get('h1').should('contain', 'Pokédex');
    cy.get('[data-testid="pokemon-card"]').should('have.length.gt', 0);
  });

  it('opens pokemon modal on card click', () => {
    cy.get('[data-testid="pokemon-card"]').first().click();
    cy.get('[data-testid="pokemon-modal"]').should('be.visible');
  });

  it('loads more pokemon on scroll', () => {
    cy.get('[data-testid="pokemon-card"]').its('length').then((initialLength) => {
      cy.scrollTo('bottom');
      cy.get('[data-testid="pokemon-card"]').should('have.length.gt', initialLength);
    });
  });
});