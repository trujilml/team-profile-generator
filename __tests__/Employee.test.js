
const Employee = require('../lib/Employee');

test('gets user name', () => {
    const employee = new Employee('Mickey', '34942', 'trj@email.com');

    expect(employee.getName()).toBe('Mickey');
});

test('gets user id', () => {
    const employee = new Employee('Mickey', '34942', 'trj@email.com');

    expect(employee.getId()).toBe('34942');
});

test('gets user email', () => {
    const employee = new Employee('Mickey', '34942', 'trj@email.com');

    expect(employee.getEmail()).toBe('trj@email.com');
});

test('gets user position', () => {
    const employee = new Employee('Mickey', '34942', 'trj@email.com');

    expect(employee.getRole()).toEqual("Employee");
});