import puppeteer from 'puppeteer';

const URL = "https://esp41pehac.eschoolplus.powerschool.com/HomeAccess/Account/LogOn"
// These variables will be determined by the end user soon
// const username = Username
// const pass = Password
// const classes = [Array with class names]

async function task () {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto(URL, {waitUntil: 'networkidle2'})
    await page.select('.input-validation-error', '350')
    await page.type('#LogOnDetails_UserName', username)
    await page.type('#LogOnDetails_Password', pass)
    await page.click('#login')
    return page
}

async function grade (page) {
    await page.waitForTimeout(2000)
    await page.click('#hac-Classes')
}



async function output () {
    const page = await task()
    await grade(page)
}

output()
