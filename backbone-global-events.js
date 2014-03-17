/*globals define:false */
define(function (require) {
  'use strict';
  var _ = require('underscore');
  var Backbone = require('backbone');
  var dispatcher;
  dispatcher = _.extend({}, Backbone.Events, { cid: 'dispatcher' });
  _.each([Backbone.Collection.prototype, Backbone.Model.prototype, Backbone.View.prototype, Backbone.Router.prototype], function (proto) {
    return _.extend(proto, {
      globalEvents: dispatcher
    });
  });
  return dispatcher;
});
