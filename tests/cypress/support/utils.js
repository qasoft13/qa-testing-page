export class utils{

    //NAV TOOL BAR
    
    clickLeaseyaiLogo() { cy.get('a.navbar-brand[href="/"]').should('contain.text', 'Leasey.AI').click(); }
   
    clickCompaniesLogo(){ cy.get('a.nav-link[href="/companies"]').should('contain.text', 'Companies').click(); }
   
    clickPropertiesLogo(){ cy.get('a.nav-link[href="/properties"]').should('contain.text', 'Properties').click(); }

    resetData(){ cy.contains('button', 'Reset Data').click(); }


} // fin class utils