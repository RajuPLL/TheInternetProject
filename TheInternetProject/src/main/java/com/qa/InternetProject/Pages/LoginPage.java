package com.qa.InternetProject.Pages;

import org.openqa.selenium.By;
import com.qa.InternetProject.Driver.DriverInitaliazation;

public class LoginPage extends DriverInitaliazation {

	public By usernameTextBox = By.xpath("//*[@id='txtUsername']");
	public By passwordTextBox = By.xpath("//*[@id='txtPassword']");
	public By loginButton = By.xpath("//*[@id='btnLogin']");
	public By OHRMlogo = By.xpath("//*[@id='divLogo']/img");
	public By logo = By.xpath("//*[@id='divLogo']/img");

	public static void launchURL() {
		DriverInitaliazation.getdriver();
		driver.get(prop.getProperty("url"));
	}
	
	public boolean loginPagelogo() {
		boolean logodisp = driver.findElement(logo).isDisplayed();
		return logodisp;
	}
	public String loginpageTitle() {
		String loginpagetitle = driver.getTitle();
		return loginpagetitle;
	}
	public HomePage login() {
		driver.findElement(loginButton).click();
		return new HomePage();
	}

	

}
