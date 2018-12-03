sap.ui.define([
	"ems/UI5Showcase/controller/BaseController",
	"ems/UI5Showcase/bloc/ModelBloc"
], function (BaseController, ModelBloc) {
	"use strict";
	var oRouter;
	var oModelSubject;
	return BaseController.extend("ems.UI5Showcase.controller.IndexTiles", {
		onInit: function () {
			oRouter = this.getRouter();
			this._subscribeToBloc();
		},

		_subscribeToBloc: function () {
			//Get ReplaySubject & Subscrib
			ModelBloc.subscribe();
		},

		onVendorTilePress: function (oEvent) {
			oRouter.navTo("vendors");
		},

		onBillingDocsPress: function (oEvent) {
			oRouter.navTo("billingDocs");
		},

		onExit: function () {
			oModelSubject.unsubscribe();
		}
	});

});