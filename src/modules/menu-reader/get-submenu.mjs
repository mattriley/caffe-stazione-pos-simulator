import _ from 'lodash';

export default ({ constants }) => path => {

    const fullPath = path.flatMap(p => ['tree', p]);
    return _.get(constants.menu.tree, fullPath);

};
