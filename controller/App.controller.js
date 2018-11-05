sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast'
], function (Controller, MessageToast) {
	"use strict";
	//url for the repo
	const url = 'https://yoncacoskun.github.io';

	return Controller.extend("ems.UI5Showcase.controller.App", {
		onInit: function () {},
		press: function (evt) {
			window.open(url);
		}
	});
});