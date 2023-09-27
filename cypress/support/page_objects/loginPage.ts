export class LoginPage {
    emailInput = '[id="email"]';
    passwordInput = '[id="password"]';
    loginButton = '[data-testid="button-submit"]';
    invalidCredentialsErrorMessage = '.MuiAlert-message';
  
    visitLoginPage() {
      cy.visit('https://cummins.dev.axionray.com/');
    }
  
    enterEmail(email: string) {
      return cy.get(this.emailInput).type(email, { log: false }); // Mask typing
    }
  
    enterPassword(password: string) {
      return cy.get(this.passwordInput).type(password, { log: false }); // Mask typing
    }
  
    clickLoginButton() {
      return cy.get(this.loginButton).click();
    }
  
    errorMessage() {
      return cy.get(this.invalidCredentialsErrorMessage);
    }
  
    forgotYourPassword() {
      cy.get('.MuiButton-text').contains('Forgot your password?').click();
    }
  
    sendButton() {
      cy.get('[data-testid="send-button"][type="button"]').click();
    }
  }
  
  export default new LoginPage();
  