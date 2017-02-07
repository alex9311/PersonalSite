<?php

function get_injury_data($players){
    global $team_short;
    $fantasy_positions = array('QB', 'RB', 'WR', 'TE', 'K');

    $html = file_get_html('http://www.rotoworld.com/teams/injuries/nfl/all/');
    $tables = $html->find('div[id=cp1_pnlInjuries]',0);
    foreach($tables->find('div[class=pb]') as $table_container) {
        $team = $team_short[$table_container->find('div[class=headline]',0)->plaintext];
        $team_table = $table_container->find('table',0);
        foreach($team_table->find('tr') as $player){
            $player_name = trim($player->find('td',0)->plaintext);
            $player_position = trim($player->find('td',2)->plaintext);
            if($player_name == "Name" || ! in_array($player_position, $fantasy_positions)){continue;}
            $injury_date = $player->find('td',4)->plaintext;
            $injury_status = $player->find('td',3)->plaintext;
            $injury_return = $player->find('td',6)->plaintext;
            $player_id = $player_name.", ".$player_position.", ".$team;
            if(array_key_exists($player_id, $players)){
                $players[$player_id] = array_merge($players[$player_id],array(
                    "injury_date" => $injury_date,
                    "injury_status" => $injury_status,
                    "injury_return" => $injury_return
                ));
            }
        }
    }
    return $players;
}


?>
