'strict';
const $ = require('jquery');
window.jQuery = $;
window.$ = $;

import SimpleBar from 'simplebar';

import './scss/main.scss';
import './js/assets';

(function () {
  window.addEventListener('DOMContentLoaded', () => {
    activateBlockScroll('.explore-categories', '.explore-categories-cards');
  });

})();

const activateBlockScroll = (block, scrollWrapper) => {
  const element = $(block);

  if (!element.length) return;

  initSimpleBar(element.find(scrollWrapper));
};


function initSimpleBar(element) {
  $(element).each(function () {
    const current = $(this).get(0);
    const simpleBarElement = new SimpleBar(current, {
      autoHide: false,
      forceVisible: true
    });
    if (element.hasClass('listing-cards')) {
      listingScrollEvent(simpleBarElement);
    }
  });
}