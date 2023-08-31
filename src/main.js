import BoardPresenter from './presenter/board-presenter.js';
import './constanst.js';
import PointModel from './model/point-model.js';
import OfferModel from './model/offer-model.js';
import DestinationsModel from './model/destinations-model.js';

const destinationModel = new DestinationsModel();
const offerModel = new OfferModel();
const offerIds = Array.from({length:4}, offerModel.getOffers);
const pointModel = new PointModel(offerIds, destinationModel.getDestinations());

const boardPresenter = new BoardPresenter({pointModel, offerModel, destinationModel});
boardPresenter.init();


// class a {
//     getA() {
//         console.log(3213);
//     }
// }
// class c {
//     constructor(service) {
//     this.service = service;
//     this.points = this.service.getA();
//     }

//     getCCC() {
//         return this.points;
//     }
// }
// const b = new a();
// const dsad = new c(b);
// dsad.getCCC();
