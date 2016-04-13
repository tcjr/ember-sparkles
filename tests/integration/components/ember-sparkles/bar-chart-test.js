import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-sparkles/bar-chart', 'Integration | Component | ember sparkles/bar chart', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`<svg>{{ember-sparkles/bar-chart}}</svg>`);
  assert.equal(this.$().text().trim(), '');
});

test('it accepts data argument', function(assert) {
  let data = [ [ '2010-10-11', 20 ], [ '2010-10-12', 15 ], [ '2010-10-13', 25] ];

  this.set('data', data);
  this.render(hbs`<svg height="100" width="100">{{ember-sparkles/bar-chart data=data}}</svg>`);
  assert.equal(this.$('rect').length, 3, 'there are 3 <rect> elements');
  // there are 3 bars
  // bar 1 has height 20 at date 2010/10/11, bar 2 has height 15 at date... , bar 3 has height 25 at date

});
