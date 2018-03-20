const selectors = require('../selectors')

/**
 * Checks loading an employee
 * @param {object} browser the nightwatch browser object
 * @param {array} employees the array of objects containing name, phone, id and title of an employee
 */
module.exports = (browser, employee) => {
    browser
        .getText(selectors.employeeOnList(employee.id), result => browser.verify.equal(result.value, employee.name, `${employee.name} is in the employee list.`))
        .click(selectors.employeeOnList(employee.id))
        .verify.elementNotPresent(selectors.noEmployee, `An employee's record is loaded`)
        .getText(selectors.employeeNameBar, result => browser.verify.equal(result.value, employee.name, `The employee name (${employee.name}) is the editing card's title.`))
        .getText(selectors.employeeId, result => browser.assert.equal(result.value, `ID: ${employee.id}`, `The employee ID (${employee.id}) is correct in the editing card.`))
        .verify.value(selectors.nameInput, employee.name, `The employee name (${employee.name}) is correct in the input field.`)
        .verify.value(selectors.phoneInput, employee.phone, `The employee phone number (${employee.phone}) is correct in the input field.`)
        .verify.value(selectors.titleInput, employee.title, `The employee title (${employee.title}) is correct in the input field.`)
}