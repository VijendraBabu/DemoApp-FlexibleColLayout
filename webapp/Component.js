sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/krypt/DemoApp/model/models",
	"sap/f/FlexibleColumnLayoutSemanticHelper"
], function (UIComponent, Device, models, FlexibleColumnLayoutSemanticHelper) {
	"use strict";

	return UIComponent.extend("com.krypt.DemoApp.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			var oModel = new sap.ui.model.json.JSONModel();
			this.setModel(oModel, "LayoutData");

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		},

		createContent: function () {
			return sap.ui.view({
				viewName: "com.krypt.DemoApp.view.App",
				type: "XML"
			});
		},

		getHelper: function () {
			var oFCL = this.getRootControl().byId("fcl"),
				oParams = jQuery.sap.getUriParameters(),
				oSettings = {
					defaultTwoColumnLayoutType: sap.f.LayoutType.TwoColumnsMidExpanded,
					defaultThreeColumnLayoutType: sap.f.LayoutType.ThreeColumnsMidExpanded,
					mode: oParams.get("mode"),
					initialColumnsCount: oParams.get("initial"),
					maxColumnsCount: oParams.get("max")
				};

			return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings);
		}
	});
});