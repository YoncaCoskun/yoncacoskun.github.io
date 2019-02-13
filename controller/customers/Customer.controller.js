sap.ui.define([
  'jquery.sap.global',
  'sap/m/MessageToast',
  'sap/ui/core/Fragment',
  'sap/ui/core/mvc/Controller'
], function (jQuery, MessageToast, Fragment, Controller) {
  "use strict";

  var CController = Controller.extend("Ems.UI5Showcase.controller.customers.Customer", {

    onAfterRendering: function () {
      this.oView = this.getView();
      this._bDescendingSort = false;
      this.oDocsTable = this.oView.byId("customerList");
    },

    onPressNavToDetail: function () {
      this.getSplitContObj().to(this.createId("detailDetail"));
    },

    onPressDetailBack: function () {
      this.getSplitContObj().backDetail();
    },

    onPressMasterBack: function () {
      this.getSplitContObj().backMaster();
    },

    onPressGoToMaster: function () {
      this.getSplitContObj().toMaster(this.createId("master2"));
    },

    onListItemPress: function (oEvent) {
      var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

      this.getSplitContObj().toDetail(this.createId(sToPageId));
    },

    onPressModeBtn: function (oEvent) {
      var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();

      this.getSplitContObj().setMode(sSplitAppMode);
      MessageToast.show("Split Container mode is changed to: " + sSplitAppMode, {
        duration: 5000
      });
    },

    getSplitContObj: function () {
      var result = this.byId("SplitContDemo");
      if (!result) {
        jQuery.sap.log.error("SplitApp object can't be found");
      }
      return result;
    }

  });


  return CController;

});