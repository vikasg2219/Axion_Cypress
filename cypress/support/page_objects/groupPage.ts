export class GroupsPage {
    visitGroupsPage() {
      cy.get('[aria-label="Search"]').click();
    }
  
    addFilter() {
      cy.get('[aria-label="Search"]').should('be.visible').click();
      cy.contains('+ Add filter').click();
    }
  
    selectFilter() {
      cy.get('[data-testid="ArrowDropDownIcon"]').click({force:true});
      cy.get(':nth-child(2) > ul > :nth-child(2)').click();
      cy.get('[data-testid="multiple-selector-button"]').click();
    }
  
    searchAndSelectFilters(filter1: string, filter2: string) {
      this.addFilter();
      this.selectFilter();
      cy.get('#search-label').type(filter1);
      cy.wait(1000);
      cy.get('.css-19p0syp > :nth-child(1)').click();
      cy.get('#search').clear().wait(1000);
      cy.get('#search-label').type(filter2);
      cy.wait(1000);
      cy.get('.css-19p0syp > :nth-child(1)').click();
      cy.contains('+ Add filter').click({ force: true });
      cy.get('body').click();
    }
  
    createNewGroup(groupName: string) {
      cy.contains('Create New Group').click();
      cy.get('#description').type(groupName);
      cy.get('[type="checkbox"]').check().should('be.checked');
      cy.get('.MuiDialogActions-root').click();
    }
  
    assertGroupCreationSuccess() {
      cy.wait(7000);
      cy.url().should('include', 'https://cummins.dev.axionray.com/browse/');
    }
    errorMessageForExistedGroups(){
      cy.wait(5000);
      cy.contains('Group by already exists').should('be.visible');
    }
  }

  export default new GroupsPage();
  