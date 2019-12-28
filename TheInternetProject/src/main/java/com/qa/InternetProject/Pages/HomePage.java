package com.qa.InternetProject.Pages;


import org.openqa.selenium.By;

import com.qa.InternetProject.Driver.DriverInitaliazation;


public class HomePage extends DriverInitaliazation {
	
	public By welcomeUser = By.xpath("//*[@id='welcome']");
	
	public String userValidation() {
		String user_name = driver.findElement(welcomeUser).getText();
		return user_name;
	}
	public String homePageTitle() {
		String home_Page_Title = driver.getTitle();
		return home_Page_Title;
		
	}

}
