export default ({ config }) => () => {

    return <dev-bar app-name={config.appName}>
        <a target="_blank" rel="noreferrer" href={config.issuesUrl}>Send feedback</a>
        <a target="_blank" rel="noreferrer" href={config.sourceCodeUrl}>Source code</a>
    </dev-bar>;

};
