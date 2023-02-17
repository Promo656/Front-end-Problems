import {getDriver} from "./helpers";
import {By, Key, until, WebDriver} from "selenium-webdriver";

let driver: WebDriver
beforeAll(() => driver = getDriver())
afterAll(async () => await driver.quit())

const createTask = async (taskName) => {
    await driver.wait(until.elementsLocated(By.xpath("//input[@placeholder='Enter new task']")), 1000)
    await driver.findElement(By.xpath("//input[@placeholder='Enter new task']")).sendKeys(taskName + Key.ENTER)
    await driver.wait(until.elementsLocated(By.xpath(`//*[text()='${taskName}']`)), 100)
}

test('should persist tasks between sessions', async () => {
    const tasks = ["Task 1", "Task 2", "Task 3"]
    await driver.get("http://localhost:3000")
    await createTask(tasks[0])
    await createTask(tasks[1])
    await createTask(tasks[2])

    await driver.navigate().refresh()

    await driver.wait(until.elementLocated(By.xpath(`//*[text()='${tasks[0]}']`)), 1000)
    await driver.wait(until.elementLocated(By.xpath(`//*[text()='${tasks[1]}']`)), 1000)
    await driver.wait(until.elementLocated(By.xpath(`//*[text()='${tasks[2]}']`)), 1000)

    const task = await driver.findElement(By.xpath(`//*[text()='${tasks[1]}']`))
    expect(await task.getAttribute("class")).not.toMatch(/completed/)
    await task.click()

    await driver.wait(until.elementLocated(By.xpath(`//*[text()='${tasks[1]} and contains(@class,'completed')']`)), 1000)
    await driver.navigate().refresh()

    const task2 = driver.findElement(By.xpath(`//*[text()='${tasks[1]}']`))
    expect(await task2.getAttribute('class')).toMatch(/completed/)

});