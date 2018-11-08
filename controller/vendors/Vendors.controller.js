sap.ui.define([
	"ems/UI5Showcase/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("ems.UI5Showcase.controller.vendors.Vendors", {
		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel({
				firstName: "Harry",
				lastName: "Hawk",
				enabled: true,
				panelHeaderText: "Controller Check"
			});
			// Assign the model object to the SAPUI5 core
			sap.ui.getCore().setModel(oModel);
		}
	});

});