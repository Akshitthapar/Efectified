var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0; // will use this soon
var songs = [
	{
			'name': 'Fursat',
			'artist': 'Arjun',
			'album': 'Singles',
			'duration': '3:15',
		 'fileName': 'song1.mp3',
	 'image':'song1.jpg'
	},
	{
			'name': 'Kher Mangdi',
			'artist': 'Vidya Iyer',
			'album': 'Vidya Vox',
			'duration': '3:47',
			'fileName': 'song2.mp3',
	'image':'song2.jpg'
	},
	{
			'name': 'Let me love you',
			'artist': 'Vidya Iyer',
			'album': 'Vidya Vox',
			'duration': '3:16',
			'fileName': 'song3.mp3',
	'image':'song3.jpg'
	},
	{
			'name': 'Closer',
			'artist': 'Vidya Iyer',
			'album': 'Vidya Vox',
			'duration': '3:32',
			'fileName': 'song4.mp3',
	'image':'song4.jpg'
	}]
	//var fileName = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];

	function addSongNameClickEvent(songObj,position)
	{
		var songName = songObj.fileName; // New Variable
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
		changeCurrentSongDetails(songObj);
		}
		});
	}

	 function changeCurrentSongDetails(songObj)
	{
		$('.current-song-image').attr('src','img/' + songObj.image)
		$('.current-song-name').text(songObj.name)
		$('.current-song-album').text(songObj.album)
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

	function updateCurrentTime()
	{
		var song = document.querySelector('audio');
		var currentTime = Math.floor(song.currentTime);
		currentTime = fancyTimeFormat(currentTime);
		var duration = Math.floor(song.duration);
		duration = fancyTimeFormat(duration)
		$('.time-elapsed').text(currentTime);
		$('.song-duration').text(duration);
	}




	window.onload = function() {
		changeCurrentSongDetails(songs[0]);


		 for(var i =0; i < songs.length;i++)
		{
			var obj = songs[i];
			var name = '#song' + (i+1);
			var song = $(name);
			song.find('.song-name').text(obj.name);
			song.find('.song-artist').text(obj.artist);
			song.find('.song-album').text(obj.album);
			song.find('.song-length').text(obj.duration);
			addSongNameClickEvent(obj,i+1);
			$('#songs').DataTable();
		}


		updateCurrentTime();
		setInterval(function() {
		updateCurrentTime();
		},1000);
		}
	function toggleSong()
	{
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
		if (name.length > 3) {
			var message = "Welcome, " + name;
			$('.main .user-name').text(message);
			$('.welcome-screen').addClass('hidden');
			$('.main').removeClass('hidden');
		} else {
			$('#name-input').addClass('error');
			window.alert("user-name incorrect");
		}
	});

	$('.play-icon').on('click', function()
	{
		toggleSong();
	});

	$('body').on('keypress', function(event)
	{
		var target = event.target;
		if (event.keyCode == 32  && target.tagName !='INPUT')
			{
			toggleSong();
			}
	});

	/*$('#songs').DataTable({
	        paging: false
	    });
			$('.fa-repeat').on('click',function() {
			    $('.fa-repeat').toggleClass('disabled')
			    willLoop = 1 - willLoop;
			});*/
