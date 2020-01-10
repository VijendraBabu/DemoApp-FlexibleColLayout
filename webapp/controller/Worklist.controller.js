sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.krypt.DemoApp.controller.Worklist", {
		onInit: function () {
			this.oRouter = this.getOwnerComponent().getRouter();
		},

		onPress: function () {
			//Navigate to mid page
			var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(1);
			this.oRouter.navTo("Object", {
				layout: oNextUIState.layout,
				product: "dummyValue"
			});
		}
	});
});