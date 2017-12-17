const composeTweet = require('./composeTweet');
const Twitter = require('twitter');

const dev = process.env.NODE_ENV === 'development';

module.exports = (results, credentials, opts) => {
    opts = opts || {};

    let tweet = composeTweet(results, opts);

    let twitterClient = new Twitter(credentials);

    return new Promise((res, rej) => {

        if (dev) {
            res(tweet);
        } else {
            twitterClient.post('statuses/update', { status: tweet })
            .then(() => res(tweet))
            .catch((err) => rej(err));
        }
    });
}