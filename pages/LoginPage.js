class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailField = 'input[id="username"]';
      this.passwordField = 'input[id="password"]';
      this.submitButton = 'button[type="submit"]';
    }
  
    async navigate() {
      await this.page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    }
  
    async login(email, password) {
      await this.page.fill(this.emailField, email);
      await this.page.fill(this.passwordField, password);
      await this.page.click(this.submitButton);
      await this.page.waitForSelector('text=Web Application'); // Wait for successful login
    }
  }
  
  module.exports = LoginPage;