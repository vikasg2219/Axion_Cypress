import { LoginPage } from "../support/page_objects/loginPage";
import { WorkSpace } from "../support/page_objects/workSpace";

// Create instances of page objects
const loginPage = new LoginPage();
const workSpace = new WorkSpace();

describe('Login Test Cases', () => {
  beforeEach(() => {
    // Before each test case, visit the login page
    loginPage.visitLoginPage();
  });

  it('Login with valid credentials', () => {
    cy.fixture('loginData.json').then((data) => {
      const { validCredentials } = data;

      // Fill in the email and password fields with valid credentials
      loginPage.enterEmail(validCredentials.email);
      loginPage.enterPassword(validCredentials.password);

      // Click the login button and assert that the URL changes to the workspace page
      loginPage.clickLoginButton();
      cy.url().should('eq', 'https://cummins.dev.axionray.com/workspace');
    });
  });

  it('Show an error message with invalid credentials', () => {
    cy.fixture('loginData.json').then((data) => {
      const { invalidCredentials } = data;

      // Fill in the email and password fields with invalid credentials
      loginPage.enterEmail(invalidCredentials.email);
      loginPage.enterPassword(invalidCredentials.password);

      // Click the login button and assert that an error message is displayed
      loginPage.clickLoginButton();
      loginPage.errorMessage().should('contain', 'Your email address and/or password do not match.');
    });
  });

  it('Login with Empty Credentials', () => {
      loginPage.clickLoginButton();
      // No assertions for empty credentials in this example; you can add them once implemented
    });

  it("Allow users to reset their password", () => {
    cy.fixture('loginData.json').then((data) => {
      const { validCredentials } = data;

      // Click the "Forgot your password?" link
      loginPage.forgotYourPassword();

      // Enter a valid email address and click the send button
      loginPage.enterEmail(validCredentials.email);
      loginPage.sendButton();

      // No assertions for the password reset flow; you can verify the password reset link in email
    });
  });

  it("Login and select workspace", () => {
    cy.fixture('loginData.json').then((data) => {
      const { validCredentials } = data;

      // Fill in the email and password fields with valid credentials
      loginPage.enterEmail(validCredentials.email);
      loginPage.enterPassword(validCredentials.password);

      // Click the login button
      loginPage.clickLoginButton();

      // Assert that the workspace selection page is displayed
      cy.contains('Please select a workspace').should('be.visible');
      //Select First Workspace
      workSpace.selectFirstWorkspace();
    });
  });
});


