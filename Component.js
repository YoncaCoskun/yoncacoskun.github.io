sap.ui.define([
		"sap/ui/core/UIComponent",
		"sap/ui/Device",
		"ems/UI5Showcase/model/models",
		"sap/ui/model/json/JSONModel",
		"ems/UI5Showcase/bloc/ProductBloc",
		'sap/f/FlexibleColumnLayoutSemanticHelper',
		'sap/f/library'
	],
	function (UIComponent, Device, models, JSONModel, ProductBloc, FlexibleColumnLayoutSemanticHelper, fioriLibrary) {
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

				// call the init function of the parent
				UIComponent.prototype.init.apply(this, arguments);
				/*
							// set products demo model on this sample
							var oProductsModel = new sap.ui.model.json.JSONModel('products.json');
							oProductsModel.setSizeLimit(1000);
							this.setModel(oProductsModel, 'products');

							//Initialize the Product Bloc
							ProductBloc.initialize();
							ProductBloc.inProduct(oProductsModel); //Add to sink!
							*/

				var oBillDocsModel;
				// set products demo model on this sample
				oBillDocsModel = new JSONModel('/billingdocs.json');
				oBillDocsModel.setSizeLimit(1000);
				this.setModel(oBillDocsModel, 'billing');

				var oGLAccountModel;
				// set products demo model on this sample
				oGLAccountModel = new JSONModel('/model/product.json');
				oGLAccountModel.setSizeLimit(1000);
				this.setModel(oGLAccountModel, 'glaccount');

				var oCustomersModel;
				// set products demo model on this sample
				oCustomersModel = new JSONModel('/model/customers.json');
				oCustomersModel.setSizeLimit(1000);
				this.setModel(oCustomersModel, 'customer');

				var oCustomerSectorModel;
				// set products demo model on this sample
				oCustomerSectorModel = new JSONModel('/model/customerSectorCategory.json');
				oCustomerSectorModel.setSizeLimit(1000);
				this.setModel(oCustomerSectorModel, 'sectorCategory');

				var odataMapModel;
				// set products demo model on this sample
				odataMapModel = new JSONModel('/model/data.json');
				odataMapModel.setSizeLimit(1000);
				this.setModel(odataMapModel, 'map');

				// enable routing
				this.getRouter().initialize();

				// set the device model
				this.setModel(models.createDeviceModel(), "device");
			},

			getContentDensityClass: function () {
				if (this._contentDensityClass === undefined) {
					// check whether FLP has already set the content density class; do nothing in this case
					if (jQuery(document.body).hasClass("sapUiSizeCozy") || jQuery(document.body).hasClass("sapUiSizeCompact")) {
						this._contentDensityClass = "";
					} else if (!Device.support.touch) { // apply "compact" mode if touch is not supported
						this._contentDensityClass = "sapUiSizeCompact";
					} else {
						// "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
						this._contentDensityClass = "sapUiSizeCozy";
					}
				}
				return this._contentDensityClass;
			},
			createDeviceModel: function () {
				var oModel = new JSONModel(Device);
				oModel.setDefaultBindingMode("OneWay");
				return oModel;
			},

		});
	});