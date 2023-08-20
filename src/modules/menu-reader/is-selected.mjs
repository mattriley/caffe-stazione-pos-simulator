import steps from '1up/lib/array/steps.js';

export default () => selectedItem => {

    const selectedPathIncrements = steps(selectedItem.pathArray).map(path => path.join('.'));

    return item => {
        return !!selectedPathIncrements.find(path => path === item.pathArray.join('.'));
    };

};
