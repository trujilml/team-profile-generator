
// const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Victoria', '43234', 'newbie@intern.com', 'UT Austin');

    expect(intern.name);
    expect(intern.id);
    expect(intern.email);
    expect(intern.school);
});

test('get intern`s school', () => {
    const intern = new Intern('Victoria', '43234', 'newbie@intern.com', 'UT Austin');

    expect(intern.getSchool()).toEqual(expect.stringContaining('UT Austin'));
});

test('get intern role', () => {
    const intern = new Intern('Victoria', '43234', 'newbie@intern.com', 'UT Austin');

    expect(intern.getRole()).toEqual(expect.stringContaining('Victoria'));
});
