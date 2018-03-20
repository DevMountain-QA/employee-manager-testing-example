const didEmployeeLoad = require('../test-assets/test-functions/didEmployeeLoad')
const existingEmployees = require('../test-assets/test-data/existingEmployees')
const uiValues = require('../test-assets/test-data/uiValues')
const employeeEdits = require('../test-assets/test-data/employeeEdits')
const newEmployee = require('../test-assets/test-data/newEmployee')
const selectors = require('../test-assets/selectors')

module.exports = {
    beforeEach: browser => {
        browser.url("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html")
            .verify.elementPresent(selectors.noEmployee)
    },
    after: browser => {
        browser.end()
    },
    'Add Employee (DEM-9)': browser => {
        browser
            .click(selectors.addEmployee)
            .click(selectors.employeeOnList('11'))
        didEmployeeLoad(browser, { name: newEmployee.name, phone: newEmployee.phone, title: newEmployee.title, id: '11' })
        browser
            .clearValue(selectors.phoneInput)
            .setValue(selectors.phoneInput, employeeEdits.goodEmployee.phone)
            .verify.value(selectors.phoneInput, employeeEdits.goodEmployee.phone)
            .click(selectors.saveButton)
            .click(selectors.employeeOnList(existingEmployees.employee7.id))
            .click(selectors.employeeOnList('11'))
            .verify.value(selectors.phoneInput, employeeEdits.goodEmployee.phone)
    }
}