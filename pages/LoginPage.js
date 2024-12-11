class LoginPage {
    constructor(page) {
      this.page = page;

       // Selectors for the login form fields and button
      this.emailField = 'input[id="username"]';
      this.passwordField = 'input[id="password"]';
      this.submitButton = 'button[type="submit"]';
    }
  
     // Navigate to the application's login page
    async navigate() {
      await this.page.goto('/');
    }
  
    // Perform login with the given email and password
    async login(email, password) {
      await this.page.fill(this.emailField, email); // Fill the email input
      await this.page.fill(this.passwordField, password); // Fill the password input
      await this.page.click(this.submitButton); // Click the login button
      await this.page.waitForSelector('text=Web Application'); // Ensure login is successful
    }
  }
  
  module.exports = LoginPage;