import { createElement } from '../render.js';
import { createTripEventItem } from '../templates/trip-event-item-template.js';
export default class TripEventItem {
  constructor({ point }) {
    this.point = point;
  }

  getTemplate() {
    return createTripEventItem({pointData: this.point});
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
