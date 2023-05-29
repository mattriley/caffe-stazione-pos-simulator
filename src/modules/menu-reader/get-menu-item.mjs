import _ from 'lodash';

export default ({ config }) => path => {

    const fullPath = path.flatMap(p => ['tree', p]);
    return _.get(config.menu.tree, fullPath);

};
