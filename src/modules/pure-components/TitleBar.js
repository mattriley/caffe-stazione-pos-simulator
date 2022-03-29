const TitleBar = ({ config }) => () => {

    return <header>
        <div className="title-bar">
            <div className="left">
                <span className="app-name">{config.app.name}</span>
                <a className="author" target="_blank" href={config.author.profile}>by {config.author.name}</a>
            </div>
            <div className="right">
                <a target="_blank" href={config.app.source}>Source code</a>
            </div>
        </div>
    </header>

};

export default TitleBar;
