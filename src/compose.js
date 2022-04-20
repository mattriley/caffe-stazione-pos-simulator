import moduleComposer from 'module-composer';
import modules from './modules';
const { util } = modules;

const compose = ({ config, menu }) => {

    const compose = moduleComposer(modules);
    const { menuReader } = compose('menuReader', { menu, util });
    const { pureComponents } = compose('pureComponents', { menuReader, util, config });
    return compose('components', { pureComponents, menuReader });

}

export default compose;
