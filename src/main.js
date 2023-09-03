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
