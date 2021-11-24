const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Victoria', 43234, 'newbie@intern.com', 'UT Austin');

    expect(intern.school).toEqual(expect.any(String));
});

test('get intern`s school', () => {
    const intern = new Intern('Victoria', 43234, 'newbie@intern.com', 'UT Austin');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get intern role', () => {
    const intern = new Intern('Victoria', 43234, 'newbie@intern.com', 'UT Austin');

    expect(intern.getRole()).toEqual('Intern');
});
