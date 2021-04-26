const { expect } = require('chai');

const {
  getHighlightType,
  getSleepingArrangementType
} = require('../client/helpers');

describe('should help out via helpers', () => {
  it('should get the correct highlights', () => {
    expect(getHighlightType('enhanced')).to.equal('enhanced');
    expect(getHighlightType('home')).to.equal('home');
    expect(getHighlightType('check-in')).to.equal('check-in');
  });

  it('should get the sleeping arrangements', () => {
    expect(getSleepingArrangementType('bed')).to.equal('bed');
    expect(getSleepingArrangementType('couch')).to.equal('sofa');
    expect(getSleepingArrangementType()).to.equal('bed');
  });
});