sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.krypt.DemoApp.controller.Object", {
		onInit: function () {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oModel = this.getOwnerComponent().getModel("LayoutData");
			this.oRouter.getRoute("Worklist").attachPatternMatched(this._onRouteMatched, this);
			this.oRouter.getRoute("Object").attachPatternMatched(this._onRouteMatched, this);
			this.oRouter.getRoute("Object2").attachPatternMatched(this._onRouteMatched, this);
		},

		_onRouteMatched: function (oEvent) {
			//Handle Element binding here
			/*	this._product = oEvent.getParameter("arguments").product || this._product || "0";
				this.getView().bindElement({
					path: "/ProductCollection/" + this._product,
					model: "products"
				});*/
		},
		
		onPress: function (oEvent) {
			var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(2);
			this.oRouter.navTo("Object2", {
				layout: oNextUIState.layout,
				product: "dummy",
				supplier: "dummy2"
			});
		},

		//Fullscreen handling
		handleFullScreen: function () {
			var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/fullScreen");
			this.oRouter.navTo("Object", {
				layout: sNextLayout,
				product: "dummy"
			});
		},
		handleExitFullScreen: function () {
			var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/exitFullScreen");
			this.oRouter.navTo("Object", {
				layout: sNextLayout,
				product: "dummy"
			});
		},
		handleClose: function () {
			var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/closeColumn");
			this.oRouter.navTo("Worklist", {
				layout: sNextLayout
			});
		}
	});

});