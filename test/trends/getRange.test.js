const getRange = require('../../src/trends/getRange');
const assert = require('assert');

describe('getRange', () => {
    it ('returns daily range by default', () => {
        assert.equal(getRange(), 1);
    });

    it ('returns daily range by schedule', () => {
        assert.equal(getRange({ schedule: 'daily' }), 1);
    });

    it ('returns weekly range by type', () => {
        assert.equal(getRange({ schedule: 'weekly' }), 7);
    });

    it ('returns monthly range by type', () => {
        assert.equal(getRange({ schedule: 'monthly' }), 30);
    });

    it ('throws an error with wrong type', () => {
        assert.throws(() => getRange({ schedule: 'hourly'} ), Error);
    });
});
