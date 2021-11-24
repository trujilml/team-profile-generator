const Manager = require('../lib/Manager');

test('creates manager', () => {
    const manager = new Manager('Taylor', 54233, 'boss@email.com', 543);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('obtains manager role', () => {
    const manager = new Manager('Taylor', 54233, 'boss@email.com', 543);

    expect(manager.getRole()).toEqual('Manager');
});

