export default ({ constants }) => () => {

    return <dev-bar app-name={constants.appName}>
        <a target="_blank" rel="noreferrer" href={constants.issuesUrl}>Send feedback</a>
        <a target="_blank" rel="noreferrer" href={constants.sourceCodeUrl}>Source code</a>
    </dev-bar>;

};
