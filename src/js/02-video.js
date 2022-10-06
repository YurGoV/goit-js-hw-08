import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const lastPlayTimeJson = localStorage.getItem("videoplayer-current-time");

const lastPlayTime = JSON.parse(lastPlayTimeJson);


console.log(lastPlayTimeJson);
console.log(lastPlayTime);

player.on('play', function() {
    console.log('played the video!');



});

player.setCurrentTime(lastPlayTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});


player.on('timeupdate', throttle(currentPlayTime, 1000));

function currentPlayTime(currendTimeData){
        // player.on('timeupdate', function(throttle (currentPlayTime, 1000)) {
            // currendTime = JSON.stringify(currendTimeData.seconds);
            // const videoplayerCurrentTime = JSON.stringify(currentPlayTime);
            // console.log(currendTime);
            console.log(JSON.stringify(currendTimeData.seconds));
            // localStorage.setItem("videoplayer-current-time", JSON.stringify(currendTime));
            localStorage.setItem("videoplayer-current-time", JSON.stringify(currendTimeData.seconds));
}

