const { expect } = require("@playwright/test");

class DashboardPage {
    constructor(page) {
      this.page = page; // Reference to the Playwright page instance
    }
    
  // Navigate to a specific section in the application (e.g., Web or Mobile Application)
    async navigateToSection(sectionName) {
        await this.page.getByRole('button',{name:sectionName}).click();
    }
  // Verify task details: column placement and associated tags  
    async verifyTaskDetails(taskName, column, tags) {
       
    // Selector for the task in the specified column
      const taskNameText = this.page.locator(`//*[contains(text(),'${column}')]//parent::div//child::*[contains(text(),'${taskName}')]`);
    
      // Check if the task exists in the correct column  
      await expect (taskNameText).toHaveText(taskName)
      
      // Verify all specified tags are present 
      for (const tag of tags) {
        const tagText = this.page.locator(`//*[contains(text(),'${taskName}')]//parent::div//child::*[contains(text(),'${tag}')]`);
        await expect(tagText).toHaveText(tag); // Assert that the element's text matches the feature
      }   
  
    }
  }
  
  module.exports = DashboardPage;
  