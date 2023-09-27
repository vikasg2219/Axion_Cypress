export class WorkSpace {

    workspacesDropdown = '[data-testid="ExpandMoreIcon"]';

    selecYourWorkspace = {
      selectFirstWorkspace: '.MuiList-root > :nth-child(1)[role="button"]',
      selectSecondWorkspace: '.MuiList-root > :nth-child(2)[role="button"]',
      selectThirdWorkspace: '.MuiList-root > :nth-child(3)[role="button"]',
      selectFourthWorkspace: '.MuiList-root > :nth-child(4)[role="button"]',
      selectFifthWorkspace: '.MuiList-root > :nth-child(5)[role="button"]',
    };

    selectFirstWorkspace(){
    cy.get(this.selecYourWorkspace.selectFirstWorkspace).click();
    }
    selectSecondWorkspace(){
        cy.get(this.selecYourWorkspace.selectSecondWorkspace).click();
    }
    selectThirdWorkspace(){
        cy.get(this.selecYourWorkspace.selectThirdWorkspace).click();
    }
    selectFourthWorkspace(){
        cy.get(this.selecYourWorkspace.selectFourthWorkspace).click();
    }
    selectFifthWorkspace(){
        cy.get(this.selecYourWorkspace.selectFifthWorkspace).click();
    }



  }
  
  export default new WorkSpace();
  