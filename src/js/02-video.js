import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const lastPlayTimeJson = localStorage.getItem("videoplayer-current-time");
const lastPlayTime = JSON.parse(lastPlayTimeJson);

player.setCurrentTime(lastPlayTime).then(function(seconds) {
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

player.on('timeupdate', throttle(currentPlayTime, 1000));

function currentPlayTime(currendTimeData){
            // console.log(JSON.stringify(currendTimeData.seconds));//перевіряємо чи працює throttle
            localStorage.setItem("videoplayer-current-time", JSON.stringify(currendTimeData.seconds));
}

