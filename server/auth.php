<?php
//auth/loging ajax class. this class register and store user email + password


header('Access-Control-Allow-Origin: https://alertt-beshad.c9users.io/alertt/app/login.html');

class Auth
{

    public function connectDB($sql)
    {
        $conn = new mysqli("localhost", "beshad", "", "alertt");
        $conn->query($sql);
        $conn->close();
    }

    public function userID()
    {
        $email = filter_input(INPUT_POST, 'email');
        $password = filter_input(INPUT_POST, 'password');
        $auth = filter_input(INPUT_POST,'auth');
        $SQL = 'INSERT INTO users_tb (email, password,auth) VALUES ("'.$email.'","'.$password.'","'. $auth.'")';
        $this->connectDB($SQL);
    }
}

$user = new Auth();
echo($user->userID());



