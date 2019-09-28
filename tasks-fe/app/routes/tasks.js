import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const tasks = this.get('store').findAll('task');
    return tasks;
  }
});
