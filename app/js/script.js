$(document).ready(function () {

    document.cookie = "session";

    var addLat;
    var addLng;
    var addHazard;

    //logo animation

    $('.login-page__logo').addClass('zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
            $(this).removeClass('zoomIn').addClass('fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function () {
                    $(this).remove();
                    $('.mdl-layout').removeClass('hide');
                    $('.mdl-layout').addClass('fadeIn');
                });
        });

    //ajax call to send the  email and password to server
    $("#login-form__submit").click(function () {
        var email = $("#email").val();
        var password = $("#password").val();
        $.post('https://alertt-beshad.c9users.io/alertt_server/auth.php', {email: email, password: password});
    });

    // loading up the map and setting up the geolocation + map center + marker
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            disableDefaultUI: true
        });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                //setting a temporary hard-coded location to center the map as well as  place a marker
                // will have to change temp_pos to pos for operation
                var temp_pos = {
                    lat: -43.529296,
                    lng: 172.606507
                };
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(temp_pos.lat, temp_pos.lng),
                });
                map.setCenter(temp_pos);
                marker.setMap(map);

                //-----------------------------------------------------------------------------------------------------------------------------------------------------------------

                //setInterval(function() { // it prints the custom markers on the map every three seconds, it currently write over and over and over
                $("#temp").click(function () {  // for test purpose - it loads the customs markers when logo is clicked

                    //--------------------------------------------------------------------------------
                    $.ajax({
                        url: 'https://alertt-beshad.c9users.io/alertt/server/mapmarker.php',
                        dataType: 'json',
                        success: function (data) {
                            for (var i = 0; i < data.length; i++) {
                                addLat = data[i].lat;
                                addLng = data[i].lng;
                                addHazard = data[i].hazard;
                                switch (addHazard) {
                                    case 'police':
                                        var mapmarker = customIcon('images/police-map-icon.png');
                                        break;
                                    case 'roadwork':
                                        var mapmarker = customIcon('images/roadwork-map-icon.png');
                                        break;
                                    case 'accident':
                                        var mapmarker = customIcon('images/accident-map-icon.png');
                                        break;
                                    case 'traffic':
                                        var mapmarker = customIcon('images/traffic-map-icon.png');
                                        break;
                                }
                                mapmarker.setMap(map);
                            }
                            function customIcon(icon){
                                var mapmarker = new google.maps.Marker({
                                    position: new google.maps.LatLng(addLat, addLng),
                                    icon: icon
                                });
                                return mapmarker;
                            }
                        }
                    });
                    //}, 2000);
                });
            });
        }
    }

    google.maps.event.addDomListener(window, 'load', initMap);

    //submits the map form using ajax

    $("#map-submit-button").click(function () {
        var comment = $("#comment").val();
        var hazards = $('input[name="hazards"]');
        for (var i = 0; i < hazards.length; i++) {
            if (hazards[i].checked) {
                var hazard = hazards[i].value;
            }
        }
        $.post('https://alertt-beshad.c9users.io/alertt/server/map.php', {hazard: hazard, comment: comment, lat: lat, lng: lng});
    });

    //  this is the material desing lite  pop up menu

    var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('#show-dialog');
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function () {
        dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function () {
        dialog.close();
    });

}); // document loaded


//hello.js framework login via facebook, windows, google and twitter api
//i am getting user email and their token and store them in database.

hello.init({
    facebook: "893634057417972",
    windows: "0000000040181399",
    google: "555926502433-77d4pg1pvd1tv3dpsu8hapdi5vt6jf0j.apps.googleusercontent.com",
    twitter: "kr2qYZWQDxt1LxEWhQPpw7gbI"
}, {
    redirect_uri: 'login.html',
    //oauth_proxy: "https://auth-server.herokuapp.com/proxy",
    scope: 'email'
});

    $("#mdl-card-facebook").click(function () {
        hello('facebook').api('me').then(function(json) {
            var session = hello('facebook').getAuthResponse();
            var email = json.email;
            var token = session.access_token;
            $.post('https://alertt-beshad.c9users.io/alertt/server/auth.php', {email: email, auth: token});
        });
    });

    $("#mdl-card-google").click(function () {
        hello('google').api('me').then(function(json) {
            var session = hello('google').getAuthResponse();
            var email = json.email;
            var token = session.access_token;
            $.post('https://alertt-beshad.c9users.io/alertt/server/auth.php', {email: email, auth: token});
        });
    });

    $("#mdl-card-windows").click(function () {
        hello('windows').api('me').then(function(json) {
            var session = hello('windows').getAuthResponse();
            var email = json.email;
            var token = session.access_token;
            $.post('https://alertt-beshad.c9users.io/alertt/server/auth.php', {email: email, auth: token});
        });
    });

    $("#mdl-card-twitter").click(function () {
        hello('twitter').api('me').then(function(json) {
            var session = hello('twitter').getAuthResponse();
            var email = json.name; //twitter does not give users email address via their api
            var token = session.access_token;
            $.post('https://alertt-beshad.c9users.io/alertt/server/auth.php', {email: email, auth: token});
        });
    });








