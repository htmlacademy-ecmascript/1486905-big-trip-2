import { createElement } from '../render.js';

//создать шаблон списка событий
const createEventsListTemplate = () => '<ul class="trip-events__list"></ul>';

export default class EventListView {
  getTemplate() {
    return createEventsListTemplate();
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
