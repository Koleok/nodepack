import { expect } from 'chai';
import { testIfExists, shouldReturnQuery } from '../shared';
import helpersFactory from '../../modules/helpers';
import deps from '../../ioc';

const helpers = helpersFactory({
  ...deps
});

describe('When passed an argument of "sandwich"', () => {
  const result = helpers.exampleFunction({
    arg: 'sandwich :)'
  });

  it('description', () => {
    expect(result)
      .to.equal('Check out this result! sandwich :)');
  });
});
