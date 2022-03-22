const isSelected = ({ util }) => selectedItem => {

    const selectedPathIncrements = util.inflate(selectedItem.pathArray).map(path => path.join('.'));

    return item => {
        return !!selectedPathIncrements.find(path => path === item.pathArray.join('.'));
    }
}

export default isSelected;
