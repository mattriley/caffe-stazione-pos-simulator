import ejs from 'ejs';
import child from 'child_process';
import process from 'process';
import compose from '../../src/compose';

const fetchText = url => child.execSync(`curl ${url}`).toString('utf8');

const fetchCode = (url, opts = {}) => {
    const open = opts.open || true;
    const code = fetchText(url);

    return [
        `<details ${open ? 'open' : ''}>`,
        `<summary>${url}</summary>`,
        '',
        '```js',
        (opts.includeFootnotes ? code : code.split('/*')[0]).trim(),
        '```',
        '</details>'
    ].join('\n');
};

const moduleGraph = () => {
    const { mermaid } = compose().composition;
    return [
        '```mermaid',
        mermaid(),
        '```',
    ].join('\n');
};

const [templateFile = 'README-TEMPLATE.md'] = process.argv.slice(2);
const data = { fetchText, fetchCode, moduleGraph };

ejs.renderFile(templateFile, data, {}, (err, res) => {
    if (err) throw err;
    process.stdout.write(res);
});
