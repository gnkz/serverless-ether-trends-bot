const format = require('date-fns/format');
const getRange = require('./getRange');

module.exports = (opts) => {

    opts = opts || {};

    let range = getRange(opts);

    let date = new Date();
    
    date.setDate(date.getDate() - range);

    let formatedDate = format(date, 'YYYY-MM-DD');

    let searchQuery = `q=topic:ethereum+created:>${formatedDate}`;

    let sortQuery = 'sort=stars';

    let orderQuery = 'order=desc';
    
    return `${searchQuery}&${sortQuery}&${orderQuery}`;
}