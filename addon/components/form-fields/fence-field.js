import Ember from 'ember';
import layout from '../../templates/components/form-fields/fence-field';

const {
  Component,
  set
} = Ember;

const TextFieldComponent = Component.extend({
  tagName: '',
  layout,

  actions: {
    selectNode(value) {
      this.get('object').set(`${this.get('propertyName')}.checked`, value);
   },
  },
});

TextFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default TextFieldComponent;
