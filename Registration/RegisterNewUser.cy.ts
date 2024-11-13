describe('SpinBet Casino Registration Test', () => {
   
    const username = 'Tester';
    const email = 'beftoski@gmail.com';
    const password = 'QWErty123!';
    const dobDay = '07';
    const dobMonth = '07';
    const dobYear = '1990';
    const mobilePhone = '+64 646-464-6464'; 
    
    before(() => {
      cy.visit('https://www.spinbet.com/en-nz');
      cy.get('.css-1vczc1y > .MuiButtonBase-root').click(); 

    });


    it('Should successfully register a new user', () => {
      
      cy.get(':nth-child(1) > .css-iq5cx > .css-15gg1qw > [data-testid="user-input"]')
        .type(username)
        .should('have.value', username); 
      
      cy.get('[data-testid="email-input"]')
        .type(email)
        .should('have.value', email); 
      
      cy.get('.css-lvre3k > .css-f22cmc')
        .should('contain', 'New Zealand')
        
      cy.get('.css-v4jzoj')
        .should('contain','NZD')
      
      cy.get(':nth-child(4) > .css-iq5cx > .css-15gg1qw > [data-testid="user-input"]')
        .type(password)
        .should('have.value', password); 
      
      cy.get('.css-gg4vpm > :nth-child(1) > input')
        .type(dobDay)
        .should('have.value', dobDay); 

      cy.get('.css-gg4vpm > :nth-child(2) > input')
        .type(dobMonth)
        .should('have.value', dobMonth);
        
      cy.get(':nth-child(3) > input')
        .type(dobYear)
        .should('have.value', dobYear); 

      cy.get('.css-1bv66cz')
        .should('contain', 'NZ')
     
      cy.get('[data-testid="mobilePhone"]')
        .type(mobilePhone)
        .should('have.value', mobilePhone); 
      
      cy.get(':nth-child(2) > .css-18ajhy3 > .css-igig20')
        .click();
      
      cy.get('.css-1xkusk8 > .MuiButtonBase-root')  
        .click();
      
      
    });


    after('We should have error message since we already used this email', () => {
      cy.get('.error-message')
        .should('be.visible') 
        .and('contain', 'Email is already registered.');
    });


  });










