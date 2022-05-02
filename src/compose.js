import moduleComposer from 'module-composer';
import modules from './modules/index.js';
import defaultConfig from './default-config.json';

const compose = (...configs) => {

    const { compose, config } = moduleComposer(modules, defaultConfig, ...configs);
    const { menu } = config;
    const { util } = compose('util');
    const { menuReader } = compose('menuReader', { menu, util });
    const { pureComponents } = compose('pureComponents', { menuReader, util, config });
    return compose('components', { pureComponents, menuReader });

};

export default compose;
