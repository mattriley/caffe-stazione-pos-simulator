import mixpanel from 'mixpanel-browser';
import composer from 'module-composer';
import modules from './modules/index.mjs';
import defaultConfig from './default-config.mjs';

export default ({ compositionName, configs }) => {

    const { compose, config } = composer({ ...modules, mixpanel }, { compositionName, defaultConfig, configs });
    const { menu } = config;
    const { util } = compose('util');
    const { menuReader } = compose('menuReader', { menu, util });
    const { pureComponents } = compose('pureComponents', { menuReader, util, config });
    compose('components', { pureComponents, menuReader, mixpanel });
    return compose.end();

};
