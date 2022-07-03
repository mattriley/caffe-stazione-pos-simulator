export default ({ menuReader, util }) => path => {

    const pathIncrements = util.inflate(path);
    return pathIncrements.map(menuReader.getMenuItem);

};
