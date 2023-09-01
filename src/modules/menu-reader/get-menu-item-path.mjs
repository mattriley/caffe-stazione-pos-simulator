import up from '1up';

export default ({ menuReader }) => path => {

    const pathIncrements = up.array.steps(path);
    return pathIncrements.map(menuReader.getMenuItem);

};
