// const Employee = require('../lib/Employee');

const Engineer = require('../lib/Engineer');


test('creates engineer', () => {
    const engineer = new Engineer('Josh', '75324', 'engineer@email.com', 'jwaltz');

    expect(engineer.name);
    expect(engineer.id);
    expect(engineer.email);
    expect(engineer.github);
});



test('obtains github username with respective link', () => {
    const engineer = new Engineer('Josh', '75324', 'engineer@email.com', 'jwaltz');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining('jwaltz'));
});

test('get engineer role', () => {
    const engineer = new Engineer('Josh', '75324', 'engineer@email.com', 'jwaltz');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Josh'));
});

