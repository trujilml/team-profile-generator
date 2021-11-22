
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates manager', () => {
    const manager = new Manager('Taylor', '54233', 'boss@email.com', '543')

    expect(manager.name)
})

