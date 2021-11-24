const Employee = require('../lib/Employee');

test('creates employee as an object', () => {
    const employee = new Employee('Mickey', 34942, 'trj@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test('gets user name', () => {
    const employee = new Employee('Mickey', 34942, 'trj@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets user id', () => {
    const employee = new Employee('Mickey', 34942, 'trj@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets user email', () => {
    const employee = new Employee('Mickey', 34942, 'trj@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets user position', () => {
    const employee = new Employee('Mickey', 34942, 'trj@email.com');

    expect(employee.getRole()).toEqual('Employee');
});