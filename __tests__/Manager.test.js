const Manager = require('../lib/Manager.js');

test('creates a Manager object', () => {
    const manager = new Manager('Argent', 42, 'jrargent42@gmail.com', 'office#2');

    expect(manager.name).toBe('Argent');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('jrargent42@gmail.com');
    expect(manager.officeNumber).toBe('office#2');
    
});

test('gets manager role', () => {
    const manager = new Manager('Argent', 42, 'jrargent42@gmail.com', 'office#2');

    expect(manager.getRole()).toBe('Manager');
})

