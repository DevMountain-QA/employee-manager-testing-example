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
    'Cancelling Changes (DEM-4)' : browser => {
        didEmployeeLoad(browser, existingEmployees.employee1)
        browser
            .clearValue(selectors.nameInput)
            .setValue(selectors.nameInput, employeeEdits.goodEmployee.name)
            .verify.value(selectors.nameInput, employeeEdits.goodEmployee.name)
            .click(selectors.cancelButton)
        didEmployeeLoad(browser, existingEmployees.employee1)
    },
    'Saving Changes (DEM-5)' : browser => {
        didEmployeeLoad(browser, existingEmployees.employee3)
        browser
            .clearValue(selectors.nameInput)
            .setValue(selectors.nameInput, employeeEdits.goodEmployee.name)
            .verify.value(selectors.nameInput, employeeEdits.goodEmployee.name)
            .click(selectors.saveButton)
            .click(selectors.employeeOnList(existingEmployees.employee4.id))
            .click(selectors.employeeOnList(existingEmployees.employee3.id))
            .verify.value(selectors.nameInput, employeeEdits.goodEmployee.name)
    },
    'Navigating Away (DEM-6)' : browser => {
        didEmployeeLoad(browser, existingEmployees.employee1)
        browser
            .clearValue(selectors.nameInput)
            .setValue(selectors.nameInput, employeeEdits.goodEmployee.name)
            .verify.value(selectors.nameInput, employeeEdits.goodEmployee.name)
            .click(selectors.employeeOnList(existingEmployees.employee6.id))
        didEmployeeLoad(browser, existingEmployees.employee1)
    }
}