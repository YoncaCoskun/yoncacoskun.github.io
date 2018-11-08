/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"ems/UI5Showcase/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ems/UI5Showcase/test/integration/pages/App",
	"ems/UI5Showcase/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ems.UI5Showcase.view.",
		autoWait: true
	});
});