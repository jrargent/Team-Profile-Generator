const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern('Argent', 42, 'jrargent42@gmail.com', 'UNC');

    expect(intern.name).toBe('Argent');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('jrargent42@gmail.com');
    expect(intern.school).toBe('UNC');
    
});

test('gets intern school', () => {
    const intern = new Intern('Argent', 42, 'jrargent42@gmail.com', 'UNC');
    
    expect(intern.getSchool()).toBe('UNC');

});

test('gets intern role', () => {
    const intern = new Intern('Argent', 42, 'jrargent42@gmail.com', 'jrargent');

    expect(intern.getRole()).toBe('Intern');
});