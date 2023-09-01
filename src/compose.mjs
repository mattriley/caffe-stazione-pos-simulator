import defaultConfig from './default-config.mjs';
import modules from './modules/index.mjs';
import composer from 'module-composer';

export default ({ config } = {}) => {

    const { compose } = composer(modules, { config, defaultConfig });
    const { io } = compose('io');
    const { menuReader } = compose('menuReader');
    const { pureComponents } = compose('pureComponents', { menuReader });
    return compose('components', { pureComponents, menuReader, io });

};
