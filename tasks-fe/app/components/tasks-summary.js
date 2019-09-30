import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  classNames: ['tasks-summary'],

  sum: computed('model.[]', function() {
    return this.get('model.length');
  }),

  sumNotDone: computed('model.@each.is_completed', function() {
    return this.get('model').filter(task => {
      return (!task.get('is_completed'));
    }).length;
  }),

  sumDone: computed('model.@each.is_completed', function() {
    return this.get('model').filter(task => {
      return task.get('is_completed');
    }).length;
  })
});
