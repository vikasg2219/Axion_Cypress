import { LoginPage } from "../support/page_objects/loginPage";
import { WorkSpace } from "../support/page_objects/workSpace";
import { GroupsPage } from "../support/page_objects/groupPage";

const loginPage = new LoginPage();
const workSpace = new WorkSpace();
const groupsPage = new GroupsPage();

describe('Group Test Cases', () => {
  beforeEach(() => {
    cy.fixture('loginData.json').then((data) => {
      const { validCredentials } = data; 

      loginPage.visitLoginPage();
      loginPage.enterEmail(validCredentials.email);
      loginPage.enterPassword(validCredentials.password);
      loginPage.clickLoginButton();
      
      cy.contains('Please select a workspace').should('be.visible');
      workSpace.selectFirstWorkspace();
    });
  });

  it("Group Creation", () => {
    groupsPage.visitGroupsPage();
    groupsPage.searchAndSelectFilters('QSK95', 'L9');
    groupsPage.createNewGroup('sample group creation');
    groupsPage.assertGroupCreationSuccess();
  });
  it("Error message if group is already exists", () => {
    groupsPage.visitGroupsPage();
    groupsPage.searchAndSelectFilters('QSK95', 'L9');
    groupsPage.createNewGroup('sample group creation');
    groupsPage.errorMessageForExistedGroups();
  });
});
