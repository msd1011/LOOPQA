const { test, expect } = require('@playwright/test');
const testCases = require('../data/testCases.json'); // Import test case data
const LoginPage = require('../pages/LoginPage'); // Import LoginPage class
const DashboardPage = require('../pages/DashboardPage'); // Import DashboardPage class

test.describe('Dynamic Test Suite with POM for Demo App', () => {
  let loginPage; // LoginPage instance
  let dashboardPage; // DashboardPage instance

  // Before each test, initialize page objects and log in
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    // Navigate to login page and log in
    await loginPage.navigate();
    await loginPage.login('admin', 'password123');
  });
  // Iterate through all test cases from the JSON file
  testCases.forEach(({ testCase, navigation, taskName, column, tags }) => {
    test(testCase, async ({ page }) => {
      // Navigate to the specified section (Web or Mobile Application)
      await dashboardPage.navigateToSection(navigation);

      // Verify the task's details, including column and tags
      await dashboardPage.verifyTaskDetails(taskName, column, tags);
    });
  });
});
