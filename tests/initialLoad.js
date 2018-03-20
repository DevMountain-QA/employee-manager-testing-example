const didEmployeeLoad = require('../test-assets/test-functions/didEmployeeLoad')
const existingEmployees = require('../test-assets/test-data/existingEmployees')
const uiValues = require('../test-assets/test-data/uiValues')
const selectors = require('../test-assets/selectors')

module.exports = {
    beforeEach: browser => {
        browser.url("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html")
            .verify.elementPresent(selectors.noEmployee)
    },
    after: browser => {
        browser.end()
    },
    "UI and Initial Load (DEM-2)": browser => {
        browser
            .getText(selectors.title, result => browser.verify.equal(result.value, uiValues.title, 'App title is correct.'))
            .getText(selectors.footer, result => browser.verify.equal(result.value, uiValues.footer, 'App footer is correct.'))
            .getText(selectors.addEmployee, result => browser.verify.equal(result.value, uiValues.addEmployee, 'The add employee button is correct.'))
    },
    "Do the employees load when clicked? (DEM-3)": browser => {
        let employeeList = Object.getOwnPropertyNames(existingEmployees)
        employeeList.forEach(employee =>{
            didEmployeeLoad(browser, existingEmployees[employee])
        })
        browser.getText(selectors.saveButton, result => browser.verify.equal(result.value, uiValues.saveButton, 'The Save button is present and correct.'))
        browser.getText(selectors.cancelButton, result => browser.verify.equal(result.value, uiValues.cancelButton, 'The Cancel button is present and correct.'))
        .useXpath()
        browser.getText(selectors.nameInputLabel, result => browser.verify.equal(result.value, uiValues.nameInputLabel, 'The name input label is present and correct.'))
        browser.getText(selectors.phoneInputLabel, result => browser.verify.equal(result.value, uiValues.phoneInputLabel, 'The phone input label is present and correct.'))
        browser.getText(selectors.titleInputLabel, result => browser.verify.equal(result.value, uiValues.titleInputLabel, 'The title input label is present and correct.'))
        .useCss()
    }
}