const { test, expect } = require('@playwright/test');
const testCases = require('../data/testCases.json');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');

test.describe('Dynamic Test Suite with POM for Demo App', () => {
  let loginPage;
  let dashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    // Navigate to login page and log in
    await loginPage.navigate();
    await loginPage.login('admin', 'password123');
  });

  testCases.forEach(({ testCase, navigation, taskName, column, tags }) => {
    test(testCase, async ({ page }) => {
      // Navigate to the specific section
      await dashboardPage.navigateToSection(navigation);

      // Verify task details
      await dashboardPage.verifyTaskDetails(taskName, column, tags);
    });
  });
});
