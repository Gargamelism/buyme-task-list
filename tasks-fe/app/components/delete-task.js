import Component from '@ember/component';
import task from '../controllers/task';

export default Component.extend({
  actions: {
    deleteTask() {
      this.model.store.findRecord('task', this.task.id, { reload: true }).then(function(task) {
        task.deleteRecord();
        task.save();
      });
    }
  }
});
