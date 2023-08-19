import { createElement } from '../render.js';
import { createTripEventSortForm } from '../templates/trip-event-sort-form-template';

export default class TripEventSortForm {
  getTemplate() {
    return createTripEventSortForm();
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
