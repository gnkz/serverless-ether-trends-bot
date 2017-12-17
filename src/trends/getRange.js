module.exports = (opts) => {
    
    opts = opts || {};

    let schedule = opts.schedule || 'daily';

    let range;

    switch (schedule) {
        case 'daily':
            range = 1;
            break;
        case 'weekly':
            range = 7;
            break;
        case 'monthly':
            range = 30;
            break;
        default:
            throw new Error('Invalid range type');
            break;
    }

    return range;
}