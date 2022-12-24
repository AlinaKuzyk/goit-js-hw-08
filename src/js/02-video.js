import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

const savedTime = localStorage.getItem(CURRENT_TIME) || 0;

const currentSecond = throttle(({ seconds }) => {
  localStorage.setItem(CURRENT_TIME, seconds);
}, 1000);

player.on('timeupdate', currentSecond);

player.setCurrentTime(savedTime);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
