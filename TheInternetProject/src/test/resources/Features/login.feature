@RegressionTest
Feature: Login page test feature

@SmokeTest
Scenario: login with correct credentials
Given I navigate to orangeHRM website
And I verify the title of the page
When I enter username as "admin" and password as "admin123"
And I click on the login button
Then I validate that I am logged in to user home page as user
And I verify the title of the Homepage 

@SmokeTest, @regressionTest
Scenario: login with incorrect credentials
Given I navigate to orangeHRM website
And I verify the title of the page
When I enter username as "admin" and password as "admin123"
And I click on the login button
Then I validate that I am logged in to user home page as user
And I verify the title of the Homepage 
  