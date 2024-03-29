import {getDriver} from './helpers';
import {By, Key, until, WebDriver} from "selenium-webdriver"

let driver: WebDriver;
beforeAll(() => (driver = getDriver()));
afterAll(async () => await driver.quit());

const createTask = async (taskName) => {
    await driver.wait(until.elementsLocated(By.xpath("//input[@placeholder='Enter new task']")), 1000)
    await driver.findElement(By.xpath("//input[@placeholder='Enter new task']")).sendKeys(taskName + Key.ENTER)
    await driver.wait(until.elementsLocated(By.xpath(`//*[text()='${taskName}']`)), 1000)
}

test("should complete task", async () => {
    await driver.get("http://localhost:3000")
    await createTask("Task 1")
    await createTask("Task 2")
    await createTask("Task 3")

    // Complete task
    const task = await driver.findElement(By.xpath("//*[text()='Task 2']"));
    await task.click();

    // Check that it completed
    await driver.wait(until.elementLocated(By.xpath("//*[text()='Task 2' and contains(@class, 'completed')]")));
    expect(await task.getAttribute('class')).toMatch(/completed/);

    // Uncomplete task
    await task.click();

    // Check that it uncompleted
    await driver.wait(until.elementLocated(By.xpath("//*[text()='Task 2' and not(contains(@class, 'completed'))]")));
    expect(await task.getAttribute('class')).not.toMatch(/completed/);
})