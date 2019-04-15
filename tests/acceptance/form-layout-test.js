import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { find, click } from '@ember/test-helpers';

// import { finished } from 'stream';

module('Acceptance | form layout', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    await click('[data-test-submit-button]')
    let personText = find('[data-test-show-person]')
    assert.ok(personText);
  });
});
