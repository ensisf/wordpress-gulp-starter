// polyfill's native remove (IE 11)
if (!Element.prototype.remove) {
  Element.prototype.remove = function remove() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

// Custom events
try {
  new CustomEvent("IE has CustomEvent, but doesn't support constructor");
} catch (e) {
  window.CustomEvent = (event, settings) => {
    const evt = document.createEvent('CustomEvent');
    const params = settings || {
      bubbles: false,
      cancelable: false,
      detail: undefined,
    };

    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );

    return evt;
  };

  CustomEvent.prototype = Object.create(window.Event.prototype);
}
