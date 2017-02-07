Ext.define('Fantasy.model.Player', {
	extend: 'Ext.data.Model',
  	fields:[
            {'name': 'name', 'type':'string'},
            {'name': 'position', 'type':'string'},
            {'name': 'team', 'type':'string'},
            {'name': 'bye', 'type':'string'},
            {'name': 'pos_rank', 'type':'int'},
            {'name': 'opponent', 'type':'int'},
            {'name': 'best_rank', 'type':'int'},
            {'name': 'worst_rank', 'type':'int'},
            {'name': 'avg_rank', 'type':'int'},
            {'name': 'std_dev_rank', 'type':'int'},
            {'name': 'overall_rank', 'type':'int'},
            {'name': 'best_overall_rank', 'type':'int'},
            {'name': 'worst_overall_rank', 'type':'int'},
            {'name': 'avg_overall_rank', 'type':'int'},
            {'name': 'std_dev_overall_rank', 'type':'int'},
            {'name': 'injury_date', 'type':'string'},
            {'name': 'injury_status', 'type':'string'},
            {'name': 'injury_return', 'type':'string'}
 	]

});
