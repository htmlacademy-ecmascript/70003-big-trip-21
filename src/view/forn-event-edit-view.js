import { createElement } from '../render.js';
import { createFormEventEdit } from '../templates/forn-event-edit-template.js';

export default class FormEventEdit {
  constructor(formData) {
    this.formData = formData;
  }

  getTemplate() {
    return createFormEventEdit(this.formData);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
