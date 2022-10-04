const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Argent', 42, 'jrargent42@gmail.com', 'jrargent');

    expect(engineer.name).toBe('Argent');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('jrargent42@gmail.com');
    expect(engineer.github).toBe('jrargent');
    
});

test('gets engineer role', () => {
    const engineer = new Engineer('Argent', 42, 'jrargent42@gmail.com', 'jrargent');

    expect(engineer.getRole()).toBe('Engineer');
});

test('gets GitHub username', () => {
    const engineer = new Engineer('Argent', 42, 'jrargent42@gmail.com', 'jrargent');

    expect(engineer.getGithub()).toBe('jrargent');
})