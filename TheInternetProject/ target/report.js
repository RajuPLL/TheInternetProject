$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Home Page features",
  "description": "I want to use this template for my feature file",
  "id": "home-page-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionTest"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Verifying all link under admin section",
  "description": "",
  "id": "home-page-features;verifying-all-link-under-admin-section",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am already on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover to admin section",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I mouse hover on the job section",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I mouse hover on the job Titles link and click on it",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I am directed to Job Titles page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I mouse hover on the job section again",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I mouse hover on the Pay Grades link and click on it",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefination.i_am_already_on_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefination.i_mouse_hover_to_admin_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefination.i_mouse_hover_on_the_job_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefination.i_mouse_hover_on_the_job_Titles_link_and_click_on_it()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefination.i_am_directed_to_Job_Titles_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefination.i_mouse_hover_on_the_job_section_again()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefination.i_mouse_hover_on_the_Pay_Grades_link_and_click_on_it()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login page test feature",
  "description": "",
  "id": "login-page-test-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionTest"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "login with correct credentials",
  "description": "",
  "id": "login-page-test-feature;login-with-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to orangeHRM website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter username as \"admin\" and password as \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate that I am logged in to user home page as user",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I verify the title of the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefination.i_navigate_to_orangeHRM_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageStepDefination.i_verify_the_title_of_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "admin123",
      "offset": 45
    }
  ],
  "location": "LoginPageStepDefination.i_enter_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageStepDefination.i_click_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageStepDefination.i_validate_that_I_am_logged_in_to_user_home_page_as_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageStepDefination.i_verify_the_title_of_the_Homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "login with incorrect credentials",
  "description": "",
  "id": "login-page-test-feature;login-with-incorrect-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@SmokeTest,"
    },
    {
      "line": 13,
      "name": "@regressionTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I navigate to orangeHRM website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter username as \"admin\" and password as \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I validate that I am logged in to user home page as user",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I verify the title of the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefination.i_navigate_to_orangeHRM_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageStepDefination.i_verify_the_title_of_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "admin123",
      "offset": 45
    }
  ],
  "location": "LoginPageStepDefination.i_enter_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageStepDefination.i_click_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageStepDefination.i_validate_that_I_am_logged_in_to_user_home_page_as_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageStepDefination.i_verify_the_title_of_the_Homepage()"
});
formatter.result({
  "status": "skipped"
});
});