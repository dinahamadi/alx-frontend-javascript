export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with validation
  set name(value) {
    this._validateString(value);
    this._name = value;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length with validation
  set length(value) {
    this._validateNumber(value);
    this._length = value;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students with validation
  set students(value) {
    this._validateArray(value);
    this._students = value;
  }

  // Private method to validate string
  _validateString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  // Private method to validate number
  _validateNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  // Private method to validate array
  _validateArray(value) {
    if (!Array.isArray(value)
            || !value.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
