import composer from 'module-composer';
import modules from './modules/index.mjs';
import defaultConfig from './default-config.mjs';

export default ({ config } = {}) => {

    const { configure } = composer(modules);
    const { compose } = configure(defaultConfig, config);

    const { io } = compose('io');
    const { menuReader } = compose('menuReader');
    const { pureComponents } = compose('pureComponents', { menuReader });
    compose('components', { pureComponents, menuReader, io });
    return compose.end();

};
