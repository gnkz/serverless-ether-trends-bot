const format = require('date-fns/format');
const getRange = require('./getRange');

module.exports = (opts) => {

    opts = opts || {};

    let range = getRange(opts);

    let initialDate = new Date();

    let lastDate = new Date();
    
    initialDate.setDate(initialDate.getDate() - range);

    lastDate.setDate(lastDate.getDate() - 1);

    let formatedInitial = format(initialDate, 'YYYY-MM-DD[T00:00:00]');

    let formatedLast = format(lastDate, 'YYYY-MM-DD[T23:59:59]');

    let searchQuery = `q=topic:ethereum+created:${formatedInitial}..${formatedLast}`;

    let sortQuery = 'sort=stars';

    let orderQuery = 'order=desc';
    
    return `${searchQuery}&${sortQuery}&${orderQuery}`;
}