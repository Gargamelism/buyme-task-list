import Component from '@ember/component';

export default Component.extend({
  isShowingModal: false,

  toggleModal: function() {
    this.toggleProperty('isShowingModal');
  },

  actions: {
    toggleModal: function() {
      this.toggleModal();
    }
  }
});
