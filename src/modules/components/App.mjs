export default ({ pureComponents, components, menuReader, io }) => () => {

    io.mixpanel.track('pageview');

    return <div>
        <pureComponents.DevBar />
        <components.SearchScreen {...{ pureComponents, menuReader }} />
    </div>;

};
