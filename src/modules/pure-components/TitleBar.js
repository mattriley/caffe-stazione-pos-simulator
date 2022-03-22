import "./css/TitleBar.css";

const TitleBar = () => () => {

    return <header>
        <div className="title-bar">
            <div className="left">
                <span className="app-name">Stazione Simulator</span>
                <a className="author" target="_blank" href="https://www.linkedin.com/in/mattrileyau/">by Matt Riley</a>
            </div>
            <div className="right">
                <a target="_blank" href="https://github.com/mattriley/stazione-simulator">Source code</a>
            </div>
        </div>
    </header>

};

export default TitleBar;
