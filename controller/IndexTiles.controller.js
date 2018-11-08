sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	var oRouter; 
	//const url = 'https://yoncacoskun.github.io';
	return Controller.extend("ems.UI5Showcase.controller.IndexTiles", {
		onInit: function () {
			oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		onVendorTilePress: function (oEvent) {
			oRouter.navTo("vendors");
		},
		onBillingDocsPress: function(oEvent){
			oRouter.navTo("billingDocs");
		}
	});

});