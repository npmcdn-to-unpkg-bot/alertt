$(document).ready(function(){
    $( "#loginForm-container__form" ).submit(function() {

        var email = $("#email").val();
        var password = $("#password").val();
        $.get('http://localhost:63342/alertt_server/auth.php', {email: email , password: password});
    });
});

//function(data){
//    var json = JSON.parse(data);
//    alert(json.data.user_id);
//
//}