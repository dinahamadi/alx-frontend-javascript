/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (this.constructor === !Building
        && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
