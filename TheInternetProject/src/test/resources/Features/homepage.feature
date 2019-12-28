@RegressionTest
Feature: Home Page features
 
  @RegressionTest
  Scenario: Verifying all link under admin section
    Given I am already on the home page
    When I mouse hover to admin section
    And I mouse hover on the job section
    Then I mouse hover on the job Titles link and click on it
    Then I am directed to Job Titles page
    Then I mouse hover on the job section again
    And I mouse hover on the Pay Grades link and click on it

  
