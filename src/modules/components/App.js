const App = ({ pureComponents, components, menuReader }) => () => {

    return <div>
        <pureComponents.DevBar />
        <components.SearchScreen {...{ pureComponents, menuReader }} />
    </div>

};

export default App;
