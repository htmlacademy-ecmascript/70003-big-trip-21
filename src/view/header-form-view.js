import { createElement } from '../render.js';
import { createHeaderFormTemplate } from '../templates/header-form-template.js';

export default class HeaderFormView {
  getTemplate() {
    return createHeaderFormTemplate();
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
