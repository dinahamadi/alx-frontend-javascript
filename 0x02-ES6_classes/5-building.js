/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Cannot instantiate abstract class Building');
    }
    this.sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method for subclasses to implement
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
