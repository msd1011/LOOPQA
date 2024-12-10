const { expect } = require("@playwright/test");

class DashboardPage {
    constructor(page) {
      this.page = page;
    }
  
    async navigateToSection(sectionName) {
        await this.page.getByRole('button',{name:sectionName}).click();
    }
    async verifyTaskDetails(taskName, column, tags) {
      await this.page.getByRole('heading', { name: 'To Do (2)'  }).filter({hasText:"Implement user authenticationaaaaa" });
     //Verify all tags are present
      for (const tagSelector of tags) {
        await this.page.getByRole('heading', { name: 'To Do (2)'  }).filter({has : this.page.getByText(tagSelector)})
        console.log("testttttttttttttttttttttttttt");
      }
    }
  }
  
  module.exports = DashboardPage;
  