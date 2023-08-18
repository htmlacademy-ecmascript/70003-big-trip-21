import { createElement } from '../render.js';
import { createTripEventsList } from '../templates/trip-events-list-template.js';

export default class TripEventsList {
  getTemplate() {
    return createTripEventsList();
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
