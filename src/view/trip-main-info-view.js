import { createElement } from '../render.js';
import { createTripMainInfoTemplate } from '../templates/trip-main-info-template.js';

export default class TripMainInfoView {
  getTemplate() {
    return createTripMainInfoTemplate();
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
