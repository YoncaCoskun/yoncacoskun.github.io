sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast'
], function (Controller,MessageToast) {
	"use strict";

	return Controller.extend("ems.UI5Showcase.controller.App", {
		press: function (evt) {
			MessageToast.show("The GenericTile is pressed.");
		}
	});
});