import composer from 'module-composer';
import modules from './modules/index.mjs';
import defaultConfig from './default-config.mjs';

export default ({ config }) => {

    const { configure } = composer(modules);
    const { compose, constants } = configure(defaultConfig, config);

    const { util } = compose('util');
    const { io } = compose('io', { constants });
    const { menuReader } = compose('menuReader', { util, constants });
    const { pureComponents } = compose('pureComponents', { menuReader, util, constants });
    compose('components', { pureComponents, menuReader, io });
    return compose.end();

};
