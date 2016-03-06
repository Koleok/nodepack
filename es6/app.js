import deps from './ioc';
import settings from './settings.dev';
import helpersFactory from './modules/helpers';

const helpers = helpersFactory({
  ...deps
});

const result = helpers.exampleFunction({
  arg: 'sandwich :)'
});

console.log(result);
