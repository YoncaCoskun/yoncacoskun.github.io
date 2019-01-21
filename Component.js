sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ems/UI5Showcase/model/models",
	"sap/ui/model/json/JSONModel",
	"ems/UI5Showcase/bloc/ProductBloc"
], function (UIComponent, Device, models, JSONModel, ProductBloc) {
	"use strict";

	return UIComponent.extend("ems.UI5Showcase.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {

			// set products demo model on this sample
			var oProductsModel = new sap.ui.model.json.JSONModel('products.json');
			oProductsModel.setSizeLimit(1000);
			this.setModel(oProductsModel, 'products');

			//Initialize the Product Bloc
			ProductBloc.initialize();
			ProductBloc.inProduct(oProductsModel); //Add to sink!

			var oBillDocsModel;
			// set products demo model on this sample
			oBillDocsModel = new JSONModel('/billingdocs.json');
			oBillDocsModel.setSizeLimit(1000);
			this.setModel(oBillDocsModel, 'billing');


			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});