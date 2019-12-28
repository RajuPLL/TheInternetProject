package com.qa.InternetProject.Driver;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ReadProperty {

	public static Properties prop;
	
	public static Properties Property() {
		try {
			prop = new Properties();
			FileInputStream readprop = new FileInputStream("F:\\WorkSpace\\Cucumber"
					+ "\\TheInternetProject\\src\\main\\resources\\Properties File\\config.properties");
			prop.load(readprop);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return prop;
	}
}
