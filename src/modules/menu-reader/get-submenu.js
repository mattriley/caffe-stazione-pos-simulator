import _ from 'lodash';

export default ({ menu }) => path => {

    const fullPath = path.flatMap(p => ['tree', p]);
    return _.get(menu.tree, fullPath);

};
