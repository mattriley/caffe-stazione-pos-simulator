const App = ({ pureComponents, components, menuReader }) => {

    return <div>
        <pureComponents.TitleBar />
        <components.SearchScreen {...{ pureComponents, menuReader }} />
    </div>

};

export default App;
