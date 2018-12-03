sap.ui.define([

], function () {
  "use strict";
  var _modelSubject;
  return {
    initialize: function () {
      //Create the Rx instance
      _modelSubject = new Rx.BehaviorSubject(0); // Replay subject with history of 2
    },

    getSubject: function () {
      return _modelSubject;
    },
    
    inModel: function (input) {
      _modelSubject.next(input);
    },

    subscribe: function () {
      return _modelSubject.subscribe(function (val) {
        console.log(val);
        return val;
      });
    }
  };
});