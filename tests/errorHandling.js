const didEmployeeLoad = require('../test-assets/test-functions/didEmployeeLoad')
const existingEmployees = require('../test-assets/test-data/existingEmployees')
const uiValues = require('../test-assets/test-data/uiValues')
const employeeEdits = require('../test-assets/test-data/employeeEdits')
const selectors = require('../test-assets/selectors')

module.exports = {
    beforeEach: browser => {
        browser.url("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html")
            .verify.elementPresent(selectors.noEmployee)
    },
    after: browser => {
        browser.end()
    },
    'Generating Errors (DEM-7)': browser => {
        didEmployeeLoad(browser, existingEmployees.employee5)
        browser
            .clearValue(selectors.nameInput)
            .setValue(selectors.nameInput, employeeEdits.longName)
            .verify.value(selectors.nameInput, employeeEdits.longName)
            .clearValue(selectors.phoneInput)
            .setValue(selectors.phoneInput, employeeEdits.longPhone)
            .verify.value(selectors.phoneInput, employeeEdits.longPhone)
            .clearValue(selectors.titleInput)
            .setValue(selectors.titleInput, employeeEdits.longTitle)
            .verify.value(selectors.titleInput, employeeEdits.longTitle)
            .click(selectors.saveButton)
            .verify.cssProperty(selectors.nameInput, uiValues.underline, uiValues.underlineErrorProps)
            .verify.cssProperty(selectors.phoneInput, uiValues.underline, uiValues.underlineErrorProps)
            .verify.cssProperty(selectors.titleInput, uiValues.underline, uiValues.underlineErrorProps)
            .useXpath()
            .getText(selectors.firstError, result => browser.verify.equal(result.value, uiValues.nameError))
            .getText(selectors.secondError, result => browser.verify.equal(result.value, uiValues.phoneError))
            .getText(selectors.thirdError, result => browser.verify.equal(result.value, uiValues.titleError))
            .verify.cssProperty(selectors.firstError, uiValues.errorProp, uiValues.errorPropValue)
            .verify.cssProperty(selectors.secondError, uiValues.errorProp, uiValues.errorPropValue)
            .verify.cssProperty(selectors.thirdError, uiValues.errorProp, uiValues.errorPropValue)
            .useCss()
    },
    'Clearing Errors (DEM-8)': browser => {
        didEmployeeLoad(browser, existingEmployees.employee5)
        browser
            .clearValue(selectors.nameInput)
            .setValue(selectors.nameInput, employeeEdits.longName)
            .verify.value(selectors.nameInput, employeeEdits.longName)
            .clearValue(selectors.phoneInput)
            .setValue(selectors.phoneInput, employeeEdits.longPhone)
            .verify.value(selectors.phoneInput, employeeEdits.longPhone)
            .clearValue(selectors.titleInput)
            .setValue(selectors.titleInput, employeeEdits.longTitle)
            .verify.value(selectors.titleInput, employeeEdits.longTitle)
            .click(selectors.saveButton)
            .verify.cssProperty(selectors.nameInput, uiValues.underline, uiValues.underlineErrorProps)
            .verify.cssProperty(selectors.phoneInput, uiValues.underline, uiValues.underlineErrorProps)
            .verify.cssProperty(selectors.titleInput, uiValues.underline, uiValues.underlineErrorProps)
            .useXpath()
            .getText(selectors.firstError, result => browser.verify.equal(result.value, uiValues.nameError))
            .getText(selectors.secondError, result => browser.verify.equal(result.value, uiValues.phoneError))
            .getText(selectors.thirdError, result => browser.verify.equal(result.value, uiValues.titleError))
            .verify.cssProperty(selectors.firstError, uiValues.errorProp, uiValues.errorPropValue)
            .verify.cssProperty(selectors.secondError, uiValues.errorProp, uiValues.errorPropValue)
            .verify.cssProperty(selectors.thirdError, uiValues.errorProp, uiValues.errorPropValue)
            .useCss()
            .click(selectors.cancelButton)
            .verify.value(selectors.nameInput, existingEmployees.employee5.name)
            .verify.value(selectors.phoneInput, existingEmployees.employee5.phone)
            .verify.value(selectors.titleInput, existingEmployees.employee5.title)
            .verify.cssProperty(selectors.nameInput, uiValues.underline, uiValues.underlineCleanProps)
            .verify.cssProperty(selectors.phoneInput, uiValues.underline, uiValues.underlineCleanProps)
            .verify.cssProperty(selectors.titleInput, uiValues.underline, uiValues.underlineCleanProps)
            .useXpath()
            .verify.hidden(selectors.firstError)
            .useCss()
    },
    'Correcting Errors (DEM-10)': browser => {
        didEmployeeLoad(browser, existingEmployees.employee5)
        browser
            .clearValue(selectors.nameInput)
            .setValue(selectors.nameInput, employeeEdits.longName)
            .verify.value(selectors.nameInput, employeeEdits.longName)
            .clearValue(selectors.phoneInput)
            .setValue(selectors.phoneInput, employeeEdits.longPhone)
            .verify.value(selectors.phoneInput, employeeEdits.longPhone)
            .clearValue(selectors.titleInput)
            .setValue(selectors.titleInput, employeeEdits.longTitle)
            .verify.value(selectors.titleInput, employeeEdits.longTitle)
            .click(selectors.saveButton)
            .verify.cssProperty(selectors.nameInput, uiValues.underline, uiValues.underlineErrorProps)
            .verify.cssProperty(selectors.phoneInput, uiValues.underline, uiValues.underlineErrorProps)
            .verify.cssProperty(selectors.titleInput, uiValues.underline, uiValues.underlineErrorProps)
            .useXpath()
            .getText(selectors.firstError, result => browser.verify.equal(result.value, uiValues.nameError))
            .getText(selectors.secondError, result => browser.verify.equal(result.value, uiValues.phoneError))
            .getText(selectors.thirdError, result => browser.verify.equal(result.value, uiValues.titleError))
            .verify.cssProperty(selectors.firstError, uiValues.errorProp, uiValues.errorPropValue)
            .verify.cssProperty(selectors.secondError, uiValues.errorProp, uiValues.errorPropValue)
            .verify.cssProperty(selectors.thirdError, uiValues.errorProp, uiValues.errorPropValue)
            .useCss()
            .clearValue(selectors.nameInput)
            .setValue(selectors.nameInput, employeeEdits.goodEmployee.name)
            .verify.value(selectors.nameInput, employeeEdits.goodEmployee.name)
            .clearValue(selectors.phoneInput)
            .setValue(selectors.phoneInput, employeeEdits.goodEmployee.phone)
            .verify.value(selectors.phoneInput, employeeEdits.goodEmployee.phone)
            .clearValue(selectors.titleInput)
            .setValue(selectors.titleInput, employeeEdits.goodEmployee.title)
            .verify.value(selectors.titleInput, employeeEdits.goodEmployee.title)
            .click(selectors.saveButton)
            .click(selectors.employeeOnList(existingEmployees.employee4.id))
        didEmployeeLoad(browser, { name: employeeEdits.goodEmployee.name, phone: employeeEdits.goodEmployee.phone, title: employeeEdits.goodEmployee.title, id: '5' })
        browser
            .verify.cssProperty(selectors.nameInput, uiValues.underline, uiValues.underlineCleanProps)
            .verify.cssProperty(selectors.phoneInput, uiValues.underline, uiValues.underlineCleanProps)
            .verify.cssProperty(selectors.titleInput, uiValues.underline, uiValues.underlineCleanProps)
            .useXpath()
            .verify.hidden(selectors.firstError)
            .useCss()
    }
}