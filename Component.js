sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ems/UI5Showcase/model/models",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, Device, models, JSONModel) {
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

			var oModel = new JSONModel(sap.ui.require.toUrl("ems/UI5Showcase/model/") + "/feed.json");
			this.setModel(oModel);

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});