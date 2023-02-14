import { getDriver } from './helpers';
import {ThenableWebDriver, until} from "selenium-webdriver"

let driver:ThenableWebDriver;
beforeAll(async () => (driver = getDriver()));
afterAll(async () => await driver.quit());

test("test",async ()=>{
    await driver.get('http://localhost:3000');
    await driver.wait(until.titleIs('React App'), 1000);
})
