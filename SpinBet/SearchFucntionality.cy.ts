describe('SpinBet Casino Search functionality test', () => {
   
    beforeEach(() => {
      cy.visit('https://www.spinbet.com/en-nz/casino'); 
  
    });
  
  
    it('Should search for a valid game name and return results', () => {
      const validGameName = 'Le Pharaoh';
  
  
      cy.get('.css-1k1mc0e') // Assuming the search input has this class, because everytime classes have different selector
        .click()
        .clear()
        .type(validGameName);
  
      cy.get('game-tile css-q26t4w')  // Assuming the game has this class, because everytime classes have different selector
        .should('contain', validGameName); 
  });
  
  
    it('Should search for an invalid game name and return no results', () => {
    const invalidGameName = 'MR. Sam';
    
      cy.get('.css-1k1mc0e') // Assuming the search input has this class, because everytime classes have different selector
        .click()
        .clear()
        .type(invalidGameName);
  
      cy.get('.css-19apxyd') 
        .should('be.visible')
        .and('contain', 'No results found');
  });
  
  
    it('should search for a partial game name and return matching results', () => {
    const partialGameName = 'MR.';
    
  
      cy.get('.css-1k1mc0e')  // Assuming the search input has this class, because everytime classes have different selector
      .click()
      .clear()
      .type(partialGameName);
  
      cy.get('game-tile css-q26t4w')  // Assuming the game has this class, because everytime classes have different selector
        .should('contain', 'MR.'); 
  });
  
  
    it('should search using special characters and return results or handle appropriately', () => {
    const specialCharacters = '$';
    
    cy.get('.css-1k1mc0e')    // Assuming the search input has this class, because everytime classes have different selector
      .click()  
      .clear()
      .type(specialCharacters);
  
    cy.get('game-tile css-q26t4w') // Assuming the game has this class, because everytime classes have different selector
      .should('contain', '$'); 
  
  
  });
  
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  