Ext.define('Fantasy.controller.MainController', {
    extend: 'Ext.app.Controller',
    init: function(){
        this.control({
            'combo'				:	{ select:this.filter_players },
            'button[action=reload_stores]'	:	{ click:this.reload_stores }
        });
    },
    
    filter_players:function( combo, record ){
        var player_store = Ext.data.StoreManager.lookup('Players');
        if(record.data.field1 == "All"){
            player_store.clearFilter(true);
        }else{
            player_store.filter('position', record.data.field1);
        }
    },

    reload_stores:function(){
        var player_store = Ext.data.StoreManager.lookup('Players');
        player_store.reload();
    }
});
