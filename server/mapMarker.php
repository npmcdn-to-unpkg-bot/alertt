<?php

header('Access-Control-Allow-Origin: https://alertt-beshad.c9users.io/alertt/app/map.html');

class Mapmarker
{
    public function connectDB($sql)
    {
        $conn = new mysqli("localhost","beshad","","alertt");
        $result = $conn->query($sql);
        $conn->close();
        return $result;
    }

    public function marker()
    {
        $markersSQL = "SELECT * FROM hazards_tb";
        $results = $this->connectDB($markersSQL);
        $results->fetch_assoc();
        foreach($results as $result){
            $array[] = $result;
        }
        return json_encode($array);
    }
}

$marker = new Mapmarker();
echo($marker->marker());
