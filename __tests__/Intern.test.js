
// const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Victoria', '43234', 'newbie@intern.com', 'UT Austin');

    expect(intern.name);
    expect(intern.id);
    expect(intern.email);
    expect(intern.school);
});

