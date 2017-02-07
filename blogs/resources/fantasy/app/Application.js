/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Fantasy.Application', {
    extend: 'Ext.app.Application',
    name: 'Fantasy',

    controllers:	[ 'MainController' ],
    stores: 	[ 'Players' ],
    models: 	[ 'Player' ],
    views:  	[ 'Main', 'PlayerGrid' ],

    
    launch: function () {
        // TODO - Launch the application
    }
});
