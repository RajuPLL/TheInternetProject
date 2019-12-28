package com.qa.InternetProject.Runner;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.qa.InternetProject.TestUtil.LoggerHelp;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;


@RunWith(Cucumber.class)
@CucumberOptions(features = {"src\\test\\resources\\Features"}, 
glue = "com\\qa\\InternetProject\\StepDefinations",
format = {"html: target/cucumber-reports/cucumber-pretty",
		"json: target/cucumber-reports/cucumberTestReport.json",
		"rerun: target/cucumber-reports/rerun.txt"},
//plugin = "json: target/cucumber-reports/cucumberTestReport.json",
monochrome = true, dryRun = false, strict = false,
tags = {"@SmokeTest , @RegressionTest"})
public class TestRunner  {
	private TestNGCucumberRunner testNGCucumberRunner;
	LoggerHelp log;

	@BeforeClass(alwaysRun = true)
	public void setUpClass() throws Exception {
	    testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	    LoggerHelp.getLogger(TestRunner.class);
	}

	@Test(groups = "cucumber scenarios", description = "Runs Cucumber "
	+"Scenarios", dataProvider = "scenarios")
	public void scenario(CucumberFeatureWrapper cucumberFeature) throws Throwable{
	testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	}
	@DataProvider(parallel = true)
	public Object[][] scenarios() {
	    return testNGCucumberRunner.provideFeatures();
	}

	@AfterClass(alwaysRun = true)
	public void tearDownClass() throws Exception {
	    testNGCucumberRunner.finish();
	}


}
	/**
	 * 	**** IMPORTANT POINTS****
	 *  OR = {"@SmokeTest , @RegressionTest"} means execute all tests tagged as @SmokeTest OR @RegressionTest
	 *  AND =  {"@SmokeTest" , "@RegressionTest"} means execute all tests tagged as @SmokeTest AND @RegressionTest
	 *  
	 *  How to ignore any test case
	 *  just put ~ before the tag in tags section example:
	 *  tags = {"~@SmokeTest" , "@RegressionTest"}
	 */
	

