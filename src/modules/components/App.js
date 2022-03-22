const App = ({ pureComponents, components, menuReader }) => {

    return <div>
        <pureComponents.TitleBar />
        <components.SearchScreen pureComponents={pureComponents} menuReader={menuReader} />;
    </div>

};

export default App;
