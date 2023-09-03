import { generatePoint } from '../mock/point.js';

export default class PointModel {
  constructor(offerIds, destinationId) {
    this.points = generatePoint(offerIds, destinationId);
  }

  getPionts() {
    return this.points;
  }
}
