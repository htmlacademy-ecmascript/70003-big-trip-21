
import { render } from '../render.js';
import HeaderFormView from '../view/header-form-view.js';
import TripMainInfoView from '../view/trip-main-info-view.js';
import TripEventSortForm from '../view/trip-event-sort-form-view.js';
import TripEventsList from '../view/trip-events-list-view.js';
import FormEventEdit from '../view/forn-event-edit-view.js';
import TripEventItem from '../view/trip-event-item-view.js';


export default class BoardPresenter {
  tripEventList = new TripEventsList();
  tripControlElement = document.querySelector('.trip-controls__filters');
  tripMainElement = document.querySelector('.trip-main');
  tripEventsElement = document.querySelector('.trip-events');

  init() {
    render(new FormEventEdit(), this.tripEventList.getElement());
    render(new HeaderFormView, this.tripControlElement);
    render(new TripMainInfoView, this.tripMainElement, 'afterbegin');
    render(new TripEventSortForm, this.tripEventsElement);
    render(new TripEventsList, this.tripEventsElement);

    for(let i = 0; i < 3; i++) {
      render(new TripEventItem, this.tripEventList.getElement());
    }
    render(this.tripEventList, this.tripEventsElement);
  }
}
