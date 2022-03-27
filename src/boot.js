import moduleComposer from 'module-composer';
import modules from './modules';
const { startup, util } = modules;

const boot = ({ config, data }) => {

  const menu = startup.loadMenu(data.menu);

  const compose = moduleComposer(modules);
  const menuReader = compose('menuReader', { menu, util });
  compose('pureComponents', { menuReader, util, config });
  return compose.done();

}

export default boot;
