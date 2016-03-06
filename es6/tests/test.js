import { run } from './shared'

describe('all tests', () => {

  describe('unit tests', () => {
    run({
      name: 'example',
      type: 'unit'
    });
  });

  describe('integration tests', () => {
    // run({
    //   name: 'testName',
    //   type: 'testType'
    // });
  });

});
