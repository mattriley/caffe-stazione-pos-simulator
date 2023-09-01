import up from '1up';

export default () => selectedItem => {

    const selectedPathIncrements = up.array.steps(selectedItem.pathArray).map(path => path.join('.'));

    return item => {
        return !!selectedPathIncrements.find(path => path === item.pathArray.join('.'));
    };

};
