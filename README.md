### Backbone Global Events

Extends base backbone to include a globalEvents
singleton.  Useful for application-wide events.


#### Usage

````javascript
var MenuButton = Backbone.View.extend({
  events: {
    'click': 'toggle'
  },
  // Triggers event on global object
  toggle: function () {
    this.globalEvents.trigger('sidebar:toggle');
  }
});

var Sidebar = Backbone.View.extend({
  initialize: function () {
    this.globalEvents.on('sidebar:toggle', this.toggle, this);
  },
  // Will fire whenever sidebar:toggle event is detected
  // globally
  toggle: function () {
    this.$el.toggle();
  }
});

````
