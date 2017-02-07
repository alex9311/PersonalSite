<?php
require 'simple_html_dom.php';
require 'team_abbrvs.php';
require 'fantasy_pros.php';
require 'roto_injuries.php';

$players = get_fantasy_pros_data();
$players = get_injury_data($players);

$player_data_json = json_encode(array_values($players));

header("Cache-Control: no-cache, must-revalidate");
header("Expires: Fri, 01 Jul 2013 00:00:00 GMT"); // Date in the past
header("Content-type: application/JSON; charset=utf-8");

$anydata = empty($player_data_json) ? 'false' : 'true';
?>

{"status": <?php echo $anydata; ?>, "players": <?php echo $player_data_json; ?>}
