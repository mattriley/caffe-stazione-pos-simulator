import _ from 'lodash';

const getMenuItem = ({ menu }) => path => {

    const fullPath = path.flatMap(p => ['tree', p]);
    return _.get(menu.tree, fullPath);

};

export default getMenuItem;
