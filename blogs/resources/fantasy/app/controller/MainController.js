Ext.define('Fantasy.controller.MainController', {
    extend: 'Ext.app.Controller',
    init: function(){
        this.control({
            'combo'				:	{ select:this.filter_position },
            'grid'				:	{ filterchange:this.update_position_combo },
            'button[action=reload_stores]'	:	{ click:this.reload_stores },
            'button[action=clear_filters]'	:	{ click:this.clear_filters }
        });
    },

    update_position_combo:function( store ){
        var combo 		= Ext.ComponentQuery.query( 'combo' )[0]
        var grid 		= combo.up( 'gridpanel' );
        var position_index	= this.get_column_index( grid, 'position' );

        if( grid.columns[position_index].filter.active ){
            combo.setValue( grid.columns[position_index].filter.filter.getValue().toString() );
        }else{
            combo.setValue( "All" );
        }
    },

    get_column_index:function( grid, dataIndex ){
        var grid_dataIndexes	= Ext.Array.pluck( grid.columns, 'dataIndex' );
        var desired_index	= Ext.Array.indexOf( grid_dataIndexes, dataIndex );
        return desired_index;
    },

    filter_position:function( combo, record ){
        var filter_value 	= record.data.field1; 
        var grid 		= combo.up( 'gridpanel' ); 
        var position_index	= this.get_column_index( grid, 'position' );

        grid.columns[position_index].filter.setActive(false);
        if( filter_value != "All" ){
            grid.columns[position_index].filter.filter.setValue( [ filter_value ] );
            grid.columns[position_index].filter.setActive(true);
        }
    },

    clear_filters:function( tab_item ){
        var grid = tab_item.up( 'gridpanel' );
        var combo = grid.down( 'combo' );
	combo.setValue( 'All' );
        grid.filters.clearFilters();
    },

    reload_stores:function(){
        var player_store = Ext.data.StoreManager.lookup( 'Players' );
        player_store.reload();
    }
});
