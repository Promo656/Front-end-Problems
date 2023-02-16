import {getDriver} from './helpers';
import {By, Key, until, WebDriver} from "selenium-webdriver"

let driver: WebDriver;
beforeAll(async () => (driver = getDriver()));
afterAll(async () => await driver.quit());

const createTask = async (taskName) => {
    await driver.wait(until.elementsLocated(By.xpath("//input[@placeholder='Enter new task']")), 1000)
    await driver.findElement(By.xpath("//input[@placeholder='Enter new task']")).sendKeys(taskName + Key.ENTER)
    await driver.wait(until.elementsLocated(By.xpath(`//*[text()='${taskName}']`)), 1000)
}

test("should complete task", async () => {
    await driver.get("http://localhost:3000")
    await createTask("new task 1")
    await createTask("new task 2")
    await createTask("new task 3")

    const task = driver.findElement(By.xpath("//*[text()='new task 2']"))
    await task.click()

    expect(await task.getAttribute("class")).toMatch(/completed/i)

    await task.click()

    expect(await task.getAttribute("class")).not.toMatch(/completed/i)

})