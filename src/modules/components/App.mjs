export default ({ pureComponents, components, menuReader }) => () => {
    console.log(4);
    return <div>
        <pureComponents.DevBar />
        <components.SearchScreen {...{ pureComponents, menuReader }} />
    </div>;

};
