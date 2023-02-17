import {Builder} from 'selenium-webdriver';
import chrome from "chromedriver"

export const getDriver = () => new Builder().forBrowser('chrome').build();
