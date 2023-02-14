import {getDriver} from './helpers';
import {ThenableWebDriver, until, By, Key} from "selenium-webdriver"

let driver: ThenableWebDriver;
beforeAll(async () => (driver = getDriver()));
afterAll(async () => await driver.quit());

test("should create tasks", async () => {
    await driver.get('http://localhost:3000');
    await driver.wait(until.elementsLocated(By.xpath("//input[@placeholder='Enter new task']")), 1000)
    await driver.findElement(By.xpath("//input[@placeholder='Enter new task']")).sendKeys("new todo" + Key.ENTER)
    await driver.wait(until.elementsLocated(By.xpath("//*[text()='new todo!']")), 1000)
})
