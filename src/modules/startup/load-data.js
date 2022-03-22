const loadData = ({ startup }) => data => {

    const menu = startup.loadMenu(data.menu);
    return { ...data, menu };

};

export default loadData;
