import ES6lib from './index';
import expect from 'expect.js';

describe('ES6lib', () => {

  it('should load', () => {
    const lib = new ES6lib();
    expect(lib._isLoaded).to.be.eql(true);
  });

});