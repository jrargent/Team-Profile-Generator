function Employee(name = '', number, email = '') {
    // will need to refactor to have these arguments be user inputs
    this.name = name;
    this.id = number;
    this.email = email;

}

module.exports = Employee;