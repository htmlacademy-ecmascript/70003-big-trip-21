import { generateDestination } from '../mock/destination.js';

export default class DestinationsModel {
  constructor(offerIds) {
    this.destinations = generateDestination(offerIds);
  }

  getDestinations() {
    return this.destinations;
  }
}
