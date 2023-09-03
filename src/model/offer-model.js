import { generateOffer } from '../mock/offer.js';

export default class OfferModel {


  getOffers() {
    return generateOffer();
  }
}
