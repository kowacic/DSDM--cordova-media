document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log(Media);
}
function playAudio() {
    var my_media = new Media('TNT.mp3',
        function () {
            console.log("playAudio():Audio Success");
        },
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    my_media.play();
}
