import Component from '@ember/component';

export default Component.extend({
  classNames: ['complete-task'],

  click() {
    this.model.store.findRecord('task', this.task.id).then(function(task) {
      const isCompleted = task.get('is_completed') === 0 ? 1 : 0;
      task.set('is_completed', isCompleted);
      task.save();
    });
  }
});
