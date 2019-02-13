sap.ui.define([
	"ems/UI5Showcase/controller/BaseController",
	"ems/UI5Showcase/bloc/ProductBloc"
], function (BaseController, ProductBloc) {
	"use strict";
	var oRouter;
	var modelSubject;
	return BaseController.extend("ems.UI5Showcase.controller.IndexTiles", {
		onInit: function () {
			oRouter = this.getRouter();
			modelSubject = ProductBloc.getSubject();
		},

		onVendorTilePress: function (oEvent) {
			oRouter.navTo("vendors");
		},

		onBillingDocsPress: function (oEvent) {
			oRouter.navTo("billingDocs");
		},

		onExit: function () {
			modelSubject.unsubscribe();
		},
		onPressbusinessAdministration: function () {
			oRouter.navTo("businessAdmin");
		},
		toPressGeneralLedgerAccounts: function () {
			oRouter.navTo("glAccount");
		},
		toPressCustomers: function () {
			oRouter.navTo("customer");
		}
	});

});