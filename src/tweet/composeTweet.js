const getTitle = require('./getTitle');

module.exports = (results, opts) => {

    opts = opts || {};

    let title = getTitle(opts);

    let body = results.reverse().join('\n');

    let tags = '#ethereum #blockchain #github';

    return `${title}\n\n${body}\n\n${tags}`;
}