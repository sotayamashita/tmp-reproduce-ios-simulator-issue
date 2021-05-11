const { remote } = require("webdriverio");

(async () => {
    const client = await remote({
        path: "/wd/hub",
        port: 4723,
        capabilities: {
            "platformName": "ios",
            "appium:automationName": "XCUITest",
            "appium:platformVersion": "14.5",
            "appium:deviceName": "iPhone Simulator",
            "appium:app": "https://github.com/sotayamashita/tmp-reproduce-ios-simulator-issue/blob/master/KickDebug.app.zip?raw=true",
        }
    });

    let element1 = await client.findElement(
        "xpath",
        '//XCUIElementTypeButton[@name="Log in"]'
    )
    await client.elementClick(element1["element-6066-11e4-a52e-4f735466cecf"])
    await client.saveScreenshot("./tmp/1-screenshot.png");

    const element2 = await client.findElement(
        "xpath",
        '//XCUIElementTypeStaticText[@name=\"Log in\"]'
    )
    await client.elementClick(element2["element-6066-11e4-a52e-4f735466cecf"])
    await client.saveScreenshot("./tmp/2-screenshot.png");

    const element3 = await client.findElement(
        "xpath",
        "//XCUIElementTypeApplication[@name=\"KickDebug\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeTextField"
    )
    await client.elementClick(element3["element-6066-11e4-a52e-4f735466cecf"])
    await client.saveScreenshot("./tmp/3-screenshot.png");

    await client.deleteSession();
})();
