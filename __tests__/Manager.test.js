
// const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates manager', () => {
    const manager = new Manager('Taylor', '54233', 'boss@email.com', '543');

    expect(manager.name);
    expect(manager.id);
    expect(manager.email);
    expect(manager.contactNumber);
});

test('obtains manager role', () => {
    const manager = new Manager('Taylor', '54233', 'boss@email.com', '543');

    expect(manager.getRole()).toEqual(expect.stringContaining('Taylor'));
});

