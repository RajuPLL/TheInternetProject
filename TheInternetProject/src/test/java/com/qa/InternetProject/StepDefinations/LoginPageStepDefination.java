package com.qa.InternetProject.StepDefinations;

import org.testng.Assert;

import com.qa.InternetProject.Pages.HomePage;
import com.qa.InternetProject.Pages.LoginPage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageStepDefination extends LoginPage {
	
//	HomePage homepage;
	HomePage homepage = new HomePage();
	
	@Before
	public void setup() {
		launchURL();		
	}
	
	@After
	public void teardown() {
		driver.quit();
	}
	
	@Given("^I navigate to orangeHRM website$")
	public void i_navigate_to_orangeHRM_website()  {		
		Assert.assertEquals(loginPagelogo(), true);
	}

	@And("^I verify the title of the page$")
	public void i_verify_the_title_of_the_page() { 
		Assert.assertEquals(loginpageTitle(),prop.getProperty("titleOfLoginPage") );
	}

	@When("^I enter username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void i_enter_username_as_and_password_as(String username, String password)  {
		driver.findElement(usernameTextBox).sendKeys(username);
		driver.findElement(passwordTextBox).sendKeys(password);
	}

	@And("^I click on the login button$")
	public void i_click_on_the_login_button()  {
		login();
	}

	@Then("^I validate that I am logged in to user home page as user$")
	public void i_validate_that_I_am_logged_in_to_user_home_page_as_user()  {
		try {
			Assert.assertEquals(homepage.userValidation(), prop.getProperty("user_name"));
		} catch (Exception e) {
			System.out.println("actual and expected doesnot matched");;
		}
	    
	}
	@And("^I verify the title of the Homepage$")
	public void i_verify_the_title_of_the_Homepage() {
	    Assert.assertEquals(homepage.homePageTitle(), prop.getProperty("HomePagetitle"));
	}

	
}
