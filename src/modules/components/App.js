const App = ({ pureComponents, children }) => {

    return <div>
        <pureComponents.TitleBar />
        {children}
    </div>

};

export default App;
