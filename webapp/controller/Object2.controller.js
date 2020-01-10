sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.krypt.DemoApp.controller.Object2", {

		onInit: function () {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oModel = this.getOwnerComponent().getModel("LayoutData");

			this.oRouter.getRoute("Object2").attachPatternMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function (oEvent) {
			//Handle Element Binding
			/*
				this._supplier = oEvent.getParameter("arguments").supplier || this._supplier || "0";
				this._product = oEvent.getParameter("arguments").product || this._product || "0";
				this.getView().bindElement({
					path: "/ProductCollectionStats/Filters/1/values/" + this._supplier,
					model: "products"
				});
			*/
		},

		handleFullScreen: function () {
			var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/endColumn/fullScreen");
			this.oRouter.navTo("Object2", {
				layout: sNextLayout,
				product: "test",
				supplier: "test"
			});
		},
		handleExitFullScreen: function () {
			var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/endColumn/exitFullScreen");
			this.oRouter.navTo("Object2", {
				layout: sNextLayout,
				product: "test",
				supplier: "test"
			});
		},
		handleClose: function () {
			var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/endColumn/closeColumn");
			this.oRouter.navTo("Worklist", {
				layout: sNextLayout
			});
		}

	});

});