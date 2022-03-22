const App = ({ pureComponents, components, data }) => {

    return <div>
        <pureComponents.TitleBar />
        <components.SearchScreen pureComponents={pureComponents} data={data} />;
    </div>

};

export default App;
