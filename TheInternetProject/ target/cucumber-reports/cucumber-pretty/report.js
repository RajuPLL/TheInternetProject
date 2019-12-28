$(document).ready(function() {formatter.urivar (formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));"login.feature"formatter.);uri
("homepage.feature");
formatter.formatter.featurefeature(({
  "line": 2,
  "name": "Home Page features",
  "description": "",
  "id": "home-page-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionTest"
    }
  ]
});
{
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
formatter.before({
  "duration": 47077807930,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verifying all link under admin section",
  "description": "",
  "id": "home-page-features;verifying-all-link-under-admin-section",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am already on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover to admin section",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on the job section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I mouse hover on the job Titles link and click on it",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I am directed to Job Titles page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I mouse hover on the job section again",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I mouse hover on the Pay Grades link and click on it",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefination.i_am_already_on_the_home_page()"
});
formatter.result({
  "duration": 299082210,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefination.i_mouse_hover_to_admin_section()"
});
formatter.result({
  "duration": 51201,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefination.i_mouse_hover_on_the_job_section()"
});
formatter.result({
  "duration": 64642,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefination.i_mouse_hover_on_the_job_Titles_link_and_click_on_it()"
});
formatter.result({
  "duration": 71683,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefination.i_am_directed_to_Job_Titles_page()"
});
formatter.result({
  "duration": 65282,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefination.i_mouse_hover_on_the_job_section_again()"
});
formatter.result({
  "duration": 74883,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefination.i_mouse_hover_on_the_Pay_Grades_link_and_click_on_it()"
});
formatter.result({
  "duration": 84483,
  "status": "passed"
});
formatter.before({
  "duration": 48178805082,
  "status": "passed"
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
formatter.after({
  "duration": 1926096835,
  "status": "passed"
});
formatter.result({
  "duration": 3299605107,
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:30550\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027RAJ\u0027, ip: \u0027192.168.43.165\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat com.qa.InternetProject.Pages.LoginPage.loginPagelogo(LoginPage.java:20)\r\n\tat com.qa.InternetProject.StepDefinations.LoginPageStepDefination.i_navigate_to_orangeHRM_website(LoginPageStepDefination.java:32)\r\n\tat ✽.Given I navigate to orangeHRM website(login.feature:6)\r\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:30550\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:240)\r\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:158)\r\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:256)\r\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:134)\r\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:113)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:125)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:101)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat com.qa.InternetProject.Pages.LoginPage.loginPagelogo(LoginPage.java:20)\r\n\tat com.qa.InternetProject.StepDefinations.LoginPageStepDefination.i_navigate_to_orangeHRM_website(LoginPageStepDefination.java:32)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat com.qa.InternetProject.Runner.TestRunner.scenario(TestRunner.java:39)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:75)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:14)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:125)\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:238)\r\n\t... 58 more\r\n",
  "status": "failed"
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
formatter.after({
  "duration": 140805,
  "status": "passed"
});
formatter.before({
  "duration": 27217064866,
  "status": "passed"
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
  "duration": 462938334,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefination.i_verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 33894845,
  "status": "passed"
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
  "duration": 870256328,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefination.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 16584944159,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefination.i_validate_that_I_am_logged_in_to_user_home_page_as_user()"
});
formatter.result({
  "duration": 348692119,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefination.i_verify_the_title_of_the_Homepage()"
});
formatter.result({
  "duration": 32984095,
  "status": "passed"
});
formatter.after({
  "duration": 892976415,
  "status": "passed"
});
});5,
  "status": "passed"
});
formatter.after({
  "duration": 892976415,
  "status": "passed"
});
});