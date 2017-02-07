Ext.define('Fantasy.store.Players', {
	extend: 'Ext.data.Store',
	model: 'Fantasy.model.Player',
        autoLoad: true,
        autoSync: true,
        purgePageCount: 0,
        proxy: {
           type: 'rest',
           url: 'data_scrapers/get_rankings.php',
           reader: {
                   type: 'json',
                   rootProperty: 'players',
                   successProperty: 'success'
           }
        }

});
