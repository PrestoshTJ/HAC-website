import puppeteer from 'puppeteer';

const URL = "https://esp41pehac.eschoolplus.powerschool.com/HomeAccess/Account/LogOn"
// Eventually, this will be customized for each user but for now this website is strictly back-end
// const username = * Type in username here *
// const pass = * Type in password here *

async function task () {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto(URL)

    await page.select('.input-validation-error', '350')
    await page.type('#LogOnDetails_UserName', username)
    await page.type('#LogOnDetails_Password', pass)
    await page.click('#login')

}

task()
