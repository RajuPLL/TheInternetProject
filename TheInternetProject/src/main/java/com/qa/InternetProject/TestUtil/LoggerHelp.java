package com.qa.InternetProject.TestUtil;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class LoggerHelp {

	public static boolean root= false;
	
	public static Logger getLogger(Class<?> cls) {
		if(root) {
			return Logger.getLogger(cls);
		}
		PropertyConfigurator.configure("src\\main\\resources\\Properties File\\log4j.properties");
		root= true;
		return Logger.getLogger(cls);
	}
}
