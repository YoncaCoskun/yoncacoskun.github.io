sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";
	return Controller.extend("ems.UI5Showcase.controller.BaseController", {
		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onNavBack: function () {
			/* History.getInstance()
				.then(function (oHistory) {
					oHistory.getPreviousHash();
				})
				.then(function (sPreviousHash) {
					if (sPreviousHash !== undefined) {
						window.history.go(-1);
					} else {
						var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
						oRouter.navTo("indexTiles", {}, true);
					}
				}); */
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("indexTiles", {}, true);
			}
		}
	});
});