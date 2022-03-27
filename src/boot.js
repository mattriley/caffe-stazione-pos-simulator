import moduleComposer from 'module-composer';
import modules from './modules';

const boot = ({ data }) => {

  const { util } = modules;
  const compose = moduleComposer(modules);
  const startup = compose('startup');
  const { menu, config } = startup.loadData(data);
  compose.addModules({ config });
  const menuReader = compose('menuReader', { menu, util });
  compose('pureComponents', { menuReader, util, config });
  return compose.done();

}

export default boot;