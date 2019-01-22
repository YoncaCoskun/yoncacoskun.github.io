sap.ui.define([
    "ems/UI5Showcase/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "ems/UI5Showcase/formatter/formatter",
    "sap/ui/model/Filter"
  ],
  function (BaseController, JSONModel, formatter, Filter) {
    "use strict";
    //url for the repo
    return BaseController.extend("ems.UI5Showcase.controller.glAccount.GLAccount", {
      formatter: formatter,

      onInit: function () {
        this.oView = this.getView();
        this._bDescendingSort = false;
        this.oDocsTable = this.oView.byId("tableGLAccount");

        var oViewModel, oTable;
        oTable = this.byId("tableGLAccount");
        this._oTable = oTable;
        // Model used to manipulate control states
        oViewModel = new JSONModel({
          worklistTableTitle: this.getResourceBundle().getText("worklistTableTitle"),
          shareOnJamTitle: this.getResourceBundle().getText("GLAccountTitle"),
          shareSendEmailSubject: this.getResourceBundle().getText("shareSendEmailWorklistSubject"),
          shareSendEmailMessage: this.getResourceBundle().getText("shareSendEmailWorklistMessage", [location.href]),
          tableNoDataText: this.getResourceBundle().getText("tableNoDataText"),
          tableBusyDelay: 0,
          inStock: 0,
          shortage: 0,
          outOfStock: 0,
          countAll: 0
        });
        this.setModel(oViewModel, "worklistView");
        // Create an object of filters
        this._mFilters = {
          "inStock": [new Filter("unitsInStock", "GT", 10)],
          "outOfStock": [new Filter("unitsInStock", "LE", 0)],
          "shortage": [new Filter("unitsInStock", "BT", 1, 10)],
          "all": []
        };
      },
      /**
       * Event handler when a filter tab gets pressed
       * @param {sap.ui.base.Event} oEvent the filter tab event
       * @public
       */
      onQuickFilter: function (oEvent) {
        debugger;

        var oBinding = this._oTable.getBinding("items"),
          sKey = oEvent.getParameter("selectedKey");
        oBinding.filter(this._mFilters[sKey]);
      }

    });
  });