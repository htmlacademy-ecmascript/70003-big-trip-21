import { createElement } from '../render.js';
import { createFormEventEdit } from '../templates/forn-event-edit-template.js';

export default class FormEventEdit {
  getTemplate() {
    return createFormEventEdit();
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
