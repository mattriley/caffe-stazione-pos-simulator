const App = ({ pureComponents, components, services }) => {

    return <div>
        <pureComponents.TitleBar />
        <components.SearchScreen pureComponents={pureComponents} services={services} />;
    </div>

};

export default App;
