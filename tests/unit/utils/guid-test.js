import guid from '../../../utils/guid';
import { module, test } from 'qunit';

module('Unit | Utility | guid');

// Replace this with your real tests.
test('should create unique things', function (assert) {
    const g1 = guid();
    const g2 = guid();
    assert.ok(g1);
    assert.ok(g2);
    assert.notEqual(g1, g2);
});
