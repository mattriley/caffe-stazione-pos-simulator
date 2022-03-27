import moduleComposer from 'module-composer';
import modules from './modules';
const { util } = modules;

const boot = ({ data }) => {

  const { config } = data;
  const compose = moduleComposer(modules);
  const startup = compose('startup');
  const menu = startup.loadMenu(data.menu);
  compose.addModules({ config });
  const menuReader = compose('menuReader', { menu, util });
  compose('pureComponents', { menuReader, util, config });
  return compose.done();

}

export default boot;
