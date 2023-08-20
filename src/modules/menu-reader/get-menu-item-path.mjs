import steps from '1up/lib/array/steps.js';

export default ({ menuReader }) => path => {

    const pathIncrements = steps(path);
    return pathIncrements.map(menuReader.getMenuItem);

};
