const { GridFSBucket } = require("mongodb");

function checkLoginState() {
    GridFSBucket.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    if (response.status === 'connected') {
        console.log('Successfully logged in w Facebook');
        //Loggd in, get name and pic
        FB.api('/me?fields=name, first_name, picture.width(480)', changeUser);
    }
}

function changeUser(response) {
    //Add code to change name and image 
    $('p.facebookLogin').hide();
    $('#name').text(response.name);
    $('img#photo').attr("src", response.picture.data.url);
}
