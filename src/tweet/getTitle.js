module.exports = (opts) => {

    opts = opts || {};

    let schedule = opts.schedule || 'daily';

    let title;

    switch(schedule) {
        case 'daily':
            title = 'Daily Github Ethereum trends:';
            break;
        case 'weekly':
            title = 'Weekly Github Ethereum trends';
            break;
        case 'monthly':
            title = 'Monthly Github Ethereum trends';
            break;
        default:
            throw new Error('Invalid range type');
            break;
    }

    return title;

}