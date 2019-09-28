import Component from '@ember/component';

export default Component.extend({
  actions: {
    submit() {
      this.model.store.createRecord('task', {
        title: this.get('title'),
        is_deleted: 0,
        is_completed: 0
      }).save();

      this.get('onClose')();
    },

    close() {
      this.get('onClose')();
    }
  }
});