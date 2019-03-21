sap.ui.define([
		"ems/UI5Showcase/controller/BaseController",
		'sap/m/MessageToast'
	],
	function (BaseController, MessageToast) {
		"use strict";
		return BaseController.extend("ems.UI5Showcase.controller.file.File", {
			onInit: function () {
				this.getView().byId("html").setContent("<div id='textGrid' width='400' height='200' ></div>");
			},
			onAfterRendering: function () {

			},
			handleUploadPress: function () {
				debugger;
				var parentNode = document.getElementById("textGrid");
				var grid = canvasDatagrid({
					parentNode: parentNode,
					data: [{
							col1: 'foo',
							col2: 0,
							col3: 'a'
						},
						{
							col1: 'bar',
							col2: 1,
							col3: 'b'
						},
						{
							col1: 'baz',
							col2: 2,
							col3: 'c'
						}
					]
				});
				var oFileUploader = this.byId("fileUploader");
				oFileUploader.upload();
			},
			handleUploadComplete: function (oEvent) {
				var sResponse = oEvent.getParameter("response");
				if (sResponse) {
					var sMsg = "";
					var m = /^\[(\d\d\d)\]:(.*)$/.exec(sResponse);
					if (m[1] == "200") {
						sMsg = "Return Code: " + m[1] + "\n" + m[2] + "(Upload Success)";
						oEvent.getSource().setValue("");
					} else {
						sMsg = "Return Code: " + m[1] + "\n" + m[2] + "(Upload Error)";
					}
					MessageToast.show(sMsg);
				}
			}
		});
	});