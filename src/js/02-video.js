import Player from '@vimeo/player';
import throttle from 'lodash.throttle' ;


const LOCALSTORAGE_KEY = "videoplayer-current-time" ;

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});
player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
    const onPlay = data => {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
    console.log(data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const getCurrentTime = Number(localStorage.getItem(LOCALSTORAGE_KEY));

player.setCurrentTime(getCurrentTime).then(function (seconds) {
    console.log(seconds)
});