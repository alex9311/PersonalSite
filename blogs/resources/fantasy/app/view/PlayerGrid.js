Ext.define('Fantasy.view.PlayerGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.playergrid',
    requires: [ 'Fantasy.store.Players' , 'Ext.grid.filters.Filters'],
    plugins: [ 'gridfilters' ],

    emptyText: 'Couldnt load stock data',
    store: 'Players',
    frame: 'true',

    tbar: [{
        xtype:'combo',
        fieldLabel:"Filter Position",
        store:["All", "QB","RB","WR","TE","DST","K"],
        allowBlank:false,
        emptyText:"All",
        editable:false,
        matchFieldWidth:true
    },"->",{
        xtype:'button',
        text:'Clear Filters',
        action:'clear_filters'
    },{
        xtype:'button',
        text:'Reload Data',
        action:'reload_stores'
    }],

    columns: [
        { text: 'Name',  	dataIndex: 'name', 	flex: 2, hidden: false,
            renderer: function(val, meta, record, rowIndex) {
                return '<img style="height:16px" src="resources/team_logos/' + record.get('team') + '.png" />&nbsp'+ val;
            }
        },
        { text: 'Position',  	dataIndex: 'position', 	flex: 1, hidden: false, filter:{type: "list"} },
        { text: 'Bye',  	dataIndex: 'bye', 	flex: 1, hidden: false},

        { dataIndex: 'injury_date', flex: 3, hidden: false,
            header: '<img style="vertical-align:middle" src="resources/roto.jpg"/>&nbspInjury</img>',
            renderer: function(val, meta, record, rowIndex) {
                if(val != ""){
                    return record.get('injury_date') + ': ' + record.get('injury_status')+", "+record.get('injury_return');
                }
            }
        },
        { dataIndex: 'pos_rank',	flex: 1, hidden: false,
            header: '<img  style="vertical-align:middle;height:16px;" src="resources/fp.png"/>&nbspPosition Rank</img>'},
        { dataIndex: 'avg_pos_rank', 	flex: 1, hidden: true,
            header: '<img  style="vertical-align:middle;height:16px;" src="resources/fp.png"/>&nbspAverage Position Rank</img>'},
        { dataIndex: 'best_pos_rank', 	flex: 1, hidden: false,
            header: '<img  style="vertical-align:middle;height:16px;" src="resources/fp.png"/>&nbspBest Position Rank</img>'},
        { dataIndex: 'worst_pos_rank', 	flex: 1, hidden: false,
            header: '<img  style="vertical-align:middle;height:16px;" src="resources/fp.png"/>&nbspWorst Position Rank</img>'},
        { dataIndex: 'std_dev_pos_rank', 	flex: 1, hidden: true,
            header: '<img  style="vertical-align:middle;height:16px;" src="resources/fp.png"/>&nbspStd. Dev Position Rank</img>'},

        { text: 'Overall Rank', dataIndex: 'overall_rank', 			flex: 1, hidden: false,
	    renderer: function(val, meta, record, rowIndex) {if(val === 0){ return ''; } return val;},
            header: '<img  style="vertical-align:middle;height:16px;" src="resources/fp.png"/>&nbspOverall Rank</img>'},
        { text: 'Average Overall Rank', 	dataIndex: 'avg_overall_rank', 	flex: 1, hidden: true,
            header: '<img  style="vertical-align:middle;height:16px;" src="resources/fp.png"/>&nbspAverage Overall Rank</img>'},
        { text: 'Best Overall Rank', 	dataIndex: 'best_overall_rank', 	flex: 1, hidden: true,
            header: '<img  style="vertical-align:middle;height:16px;" src="resources/fp.png"/>&nbspBest Overall Rank</img>'},
        { text: 'Worst Overall Rank', 	dataIndex: 'worst_overall_rank',	flex: 1, hidden: true,
            header: '<img  style="vertical-align:middle;height:16px;" src="resources/fp.png"/>&nbspWorst Overall Rank</img>'},
        { text: 'STD Overall Rank', 	dataIndex: 'std_dev_overall_rank', 	flex: 1, hidden: true, 
            header: '<img  style="vertical-align:middle;height:16px;" src="resources/fp.png"/>&nbspStd. Dev Overall Rank</img>'},
    ],
});
