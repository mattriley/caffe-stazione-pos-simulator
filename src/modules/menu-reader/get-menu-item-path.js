const getMenuItemPath = ({ menuReader, util }) => path => {

    const pathIncrements = util.inflate(path);
    return pathIncrements.map(menuReader.getMenuItem);

};

export default getMenuItemPath;
