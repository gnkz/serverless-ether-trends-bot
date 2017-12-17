const trends = require('./trends');
const tweet = require('./tweet');

const publish = (opts, callback) => {

    opts = opts || {};

    let credentials = {
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token_key: process.env.ACCESS_TOKEN_KEY,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
    };
    
    trends(opts)
    .then((results) => {
        return tweet(results, credentials, opts);
    })
    .then((tweet) => {
        callback(null, {
            statusCode: 200,
            body: tweet
        });
    })
    .catch((err) => {
        callback(null, {
            statusCode: 500,
            body: err.message
        });
    });
}

module.exports.daily = (event, ctx, callback) => {

    let opts = {
        schedule: 'daily'
    };

    publish(opts, callback);
}

module.exports.weekly = (event, ctx, callback) => {

    let opts = {
        schedule: 'weekly'
    };

    publish(opts, callback);
}

module.exports.monthly = (event, ctx, callback) => {

    let opts = {
        schedule: 'monthly'
    };

    publish(opts, callback);
}