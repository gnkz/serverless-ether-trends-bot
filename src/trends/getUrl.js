const getQuery = require('./getQuery');

module.exports = (opts) => {

    opts = opts || {};

    let query = getQuery(opts);

    return `https://api.github.com/search/repositories?${query}`;

}