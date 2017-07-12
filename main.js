var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
function addSongNameClickEvent(songName,position)
{
var id="#song"+position
$(id).click(function() {
var audio = document.querySelector('audio');
var currentSong = audio.src;
if(currentSong.search(songName) != -1)
{
toggleSong();
}
else {
audio.src = songName;
toggleSong();
}
});
}

for (var i = 0; i < fileNames.length ; i++)
{
addSongNameClickEvent(fileNames[i],i+1)
}



function fancyTimeFormat(time)
{
// Hours, minutes and seconds
var hrs = ~~(time / 3600);
var mins = ~~((time % 3600) / 60);
var secs = time % 60;

// Output like "1:01" or "4:03:59" or "123:03:59"
var ret = "";

if (hrs > 0) {
  ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
}

ret += "" + mins + ":" + (secs < 10 ? "0" : "");
ret += "" + secs;
return ret;
}

function updateCurrentTime() {
var song = document.querySelector('audio');
var currentTime = Math.floor(song.currentTime);
currentTime = fancyTimeFormat(currentTime);
var duration = Math.floor(song.duration);
duration = fancyTimeFormat(duration)
$('.time-elapsed').text(currentTime);
$('.song-duration').text(duration);
}

var songList = ['Badri Ki Dulhania (Title Track)','Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song'];
var artistList = ['Neha Kakkar',' Monali Thakur',' Ikka Singh', 'Dev Negi'];
window.onload = function() {
for(var i=0;i<=songList.length;i++){
  var name= "#song"+ (i+1);
  var song=$(name);
song.find('.song-name').text(songList[i]);
song.find('.song-artist').text(artistList[i]);
}

updateCurrentTime();
setInterval(function() {
updateCurrentTime();
},1000);
}
function toggleSong() {
var song = document.querySelector('audio');
if(song.paused == true) {
console.log('Playing');
$('.play-icon').removeClass('fa-play').addClass('fa-pause');
song.play();
}
else {
console.log('Pausing');
$('.play-icon').removeClass('fa-pause').addClass('fa-play');
song.pause();
}
}
$('.welcome-screen button').on('click', function() {
  var name = $('#name-input').val();
  if (name.length > 2) {
      var message = "Welcome, " + name;
      $('.main .user-name').text(message);
      $('.welcome-screen').addClass('hidden');
      $('.main').removeClass('hidden');
  } else {
      $('#name-input').addClass('error');
  }
});
$('.play-icon').on('click', function() {
  toggleSong();
});
$('body').on('keypress', function(event) {
          if (event.keyCode == 32) {
              toggleSong();
          }
      });
