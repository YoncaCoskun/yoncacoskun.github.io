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
			processFiles: function (data) {
				return new Promise(function (res, rej) {

				});
			},
			handleUploadPress: function () {
				var oUploader = this.getView().byId("fileUploader");
				var domRef = oUploader.getFocusDomRef();
				var file = domRef.files[0];
				var reader = new FileReader();
				reader.readAsBinaryString(file);
				var data = reader.result;
				var fileContent = XLSX.read(data, {
					type: "binary"
				});
				var excelContent = fileContent.Strings;
				if (excelContent !== undefined) {
					delete excelContent.Unique;
					delete excelContent.Count;
					var parentNode = document.getElementById("textGrid");
					var grid = canvasDatagrid({
						parentNode: parentNode,
						data: excelContent
					});
				} else {
					console.error('Can\'t read the file!');
				}


				/* var grid = canvasDatagrid({
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
				}); */
			}
		});
	});