import chai, {
  expect
}
from 'chai';
import asPromised from 'chai-as-promised';
chai.use(asPromised);

import settings from '../../settings.dev';
import deps from '../../ioc';
import helpersFactory from '../../modules/helpers';

const {
  _
} = deps;

const helpers = helpersFactory({
  ...deps
});
