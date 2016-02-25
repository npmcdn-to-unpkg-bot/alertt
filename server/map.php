<?php
header('Access-Control-Allow-Origin: ../app/map.html');

class Map
{
    public function connectDB($sql)
    {
        $conn = new mysqli("localhost","root","root","alertt_db");
        $conn->query($sql);
        $conn->close();
    }

    public function addLocation()
    {
        $hazard = filter_input(INPUT_POST, 'hazard');
        $comment= filter_input(INPUT_POST, 'comment');
        $lat= filter_input(INPUT_POST,'lat');
        $lng= filter_input(INPUT_POST,'lng');
        $SQL = 'INSERT INTO hazards_tb (hazard, comment,lat,lng) VALUES ("' . $hazard. '","' . $comment. '","'.$lat.'","'.$lng.'")';
        $this->connectDB($SQL);
    }

}

$map = new Map();
echo($map->addLocation());