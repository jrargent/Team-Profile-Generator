const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    // have to pass in arguments with which to test
    const employee = new Employee('Argent', 42, 'jrargent42@gmail.com');

    expect(employee.name).toBe('Argent');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('jrargent42@gmail.com');

});

test('gets employee name', () => {
    const employee = new Employee('Argent', 42, 'jrargent42@gmail.com');
    expect(employee.getName()).toBe('Argent');
});

test('gets employee ID', () => {
    const employee = new Employee('Argent', 42, 'jrargent42@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee role', () => {
    const employee = new Employee('Argent', 42, 'jrargent42@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});

test('gets employee email', () => {
    const employee = new Employee('Argent', 42, 'jrargent42@gmail.com');
    expect(employee.getEmail()).toBe('jrargent42@gmail.com');
});