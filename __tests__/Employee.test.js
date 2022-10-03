const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    // have to pass in arguments with which to test
    const employee = new Employee('Argent', 42, 'jrargent42@gmail.com');

    expect(employee.name).toBe('Argent');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('jrargent42@gmail.com');

});