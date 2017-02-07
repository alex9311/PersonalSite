<?php

function get_fantasy_pros_data(){
    global $team_short;
    $players = array();

    $fantasy_positions = array('qb', 'rb', 'wr', 'te', 'k', 'dst');

    foreach($fantasy_positions as $position){
        $html = file_get_html('https://www.fantasypros.com/nfl/rankings/'.$position.'-cheatsheets.php');
        $table = $html->find('table[class=player-table]',0);
        $header_flag = 0;

        foreach($table->find('tr[class!=table-ad]') as $row) {
            $rank = $row->find('td',0)->plaintext;
            if(strpos($rank, 'Tier') !== false){ continue;}
    	$name_team = $row->find('td[class=player-label]',0)->plaintext;
            $name = ""; $team = "";
            if($position != "dst"){
                $name = preg_replace('/\W\w+\s*(\W*)$/', '$1', $name_team);
                $split_name_team = explode(" ",trim($name_team));
                $team = array_pop($split_name_team);
            }else{
                $name = trim($name_team);
                $team = $team_short[trim($name)];
            }

            $player_id = trim($name).", ".strtoupper($position).", ".trim($team);
    
            $new_player = array( $player_id => array(
                "name" => $name, 
                "position" => strtoupper($position), 
                "team" => $team, 
                "pos_rank" => $rank,
                "bye" => $row->find('td',2 )->plaintext,
                "best_pos_rank" => $row->find('td',3 )->plaintext,
                "worst_pos_rank" => $row->find('td',4 )->plaintext,
                "avg_pos_rank" => $row->find('td',5 )->plaintext,
                "std_dev_pos_rank" => $row->find('td',6)->plaintext,
                "flex_rank" => "",
                "best_flex_rank" => "",
                "worst_flex_rank" => "",
                "avg_flex_rank" => "",
                "std_dev_flex_rank" => "",
            )); 

            $players = array_merge($players,$new_player);
        }
    }

    $html = file_get_html('https://www.fantasypros.com/nfl/rankings/consensus-cheatsheets.php');
    $table = $html->find('table[class=player-table]',0);
    foreach($table->find('tr[class!=table-ad]') as $row) {
    	$rank = $row->find('td',0)->plaintext;
        if(strpos($rank, 'Tier') !== false){ continue;}
    	$position = preg_replace('/[0-9]+/', '', $row->find('td',2 )->plaintext);
	$name_team = $row->find('td[class=player-label]',0)->plaintext;

        if($position != "DST"){
            $name = preg_replace('/\W\w+\s*(\W*)$/', '$1', $name_team);
            $split_name_team = explode(" ",trim($name_team));
            $team = array_pop($split_name_team);
        }else{
            $name = trim($name_team);
            $team = $team_short[trim($name)];
        }

	$player_id = $name.", ".strtoupper($position).", ".$team;

	$players[$player_id] = array_merge($players[$player_id],array(
	    "overall_rank" => $rank,
	    "best_overall_rank" => $row->find('td',4 )->plaintext,
	    "worst_overall_rank" => $row->find('td',5 )->plaintext,
	    "avg_overall_rank" => $row->find('td',6 )->plaintext,
	    "std_dev_overall_rank" => $row->find('td',7)->plaintext
	));
    }
    return $players;
}

?>
