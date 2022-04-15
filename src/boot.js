import moduleComposer from 'module-composer';
import modules from './modules';
const { startup, util } = modules;

const boot = ({ config, data }) => {

    const menu = startup.loadMenu(data.menu);
    const compose = moduleComposer(modules);
    const menuReader = compose('menuReader', { menu, util });
    const pureComponents = compose('pureComponents', { menuReader, util, config });
    compose('components', { pureComponents, menuReader });
    return compose.getModules();

}

export default boot;
