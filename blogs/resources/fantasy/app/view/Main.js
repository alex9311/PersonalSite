/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 */
Ext.define('Fantasy.view.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'app-main',
	title: 'Draft Data Aggregator',
    
	layout: { type: 'border' },
	
	items: [{
		region: 'center',
		xtype:'playergrid'
	}]
});
