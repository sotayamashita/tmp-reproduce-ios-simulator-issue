const { remote } = require("webdriverio");

(async () => {
    const client = await remote({
        path: "/wd/hub",
        port: 4723,
        capabilities: {
            "platformName": "ios",
            "appium:automationName": "XCUITest",
            "appium:platformVersion": "14.4",
            "appium:deviceName": "iPhone Simulator",
            "appium:app": "./example.app.zip",
        }
    });

    const element = await client.findElement(
        "xpath",
        '//XCUIElementTypeButton[@name="Log in"]'
    )
    await client.elementClick(element["element-6066-11e4-a52e-4f735466cecf"])
    await client.saveScreenshot("./tmp/screenshot.png");
    await client.deleteSession();
})();
