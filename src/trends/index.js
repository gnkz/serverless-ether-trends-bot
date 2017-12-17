const axios = require('axios');
const getUrl = require('./getUrl');

module.exports = (opts) => {

    opts = opts || {};

    let reposLimit = opts.repoLimit || 5;

    return new Promise((resolve, reject) => {

        let url = getUrl(opts);

        axios.get(url)
        .then((res) => {

            let count = res.data.total_count;

            let limit;

            if (count === 0) {
                throw new Error('Empty search results');
            }

            if (count > reposLimit) {
                limit = reposLimit;
            } else {
                limit = count;
            }

            let results = res.data.items.slice(0, limit).map((repoInfo) => {
                return repoInfo.html_url;
            });

            resolve(results);
        })
        .catch((err) => {
            reject(err);
        });
    });
}