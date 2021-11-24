const Engineer = require('../lib/Engineer');


test('creates engineer', () => {
    const engineer = new Engineer('Josh', 75324, 'engineer@email.com', 'jwaltz');

    expect(engineer.github).toEqual(expect.any(String));;
});



test('obtains github username', () => {
    const engineer = new Engineer('Josh', 75324, 'engineer@email.com', 'jwaltz');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get engineer role', () => {
    const engineer = new Engineer('Josh', 75324, 'engineer@email.com', 'jwaltz');

    expect(engineer.getRole()).toEqual('Engineer');
});

