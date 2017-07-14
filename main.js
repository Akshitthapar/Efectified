var songs = [
	{
			'name': 'Badri Ki Dulhania (Title Track)',
			'artist': 'Neha Kakkar, Monali Thakur',
			'album': 'Badrinath ki Dulhania',
			'duration': '2:56',
		 'fileName': 'song1.mp3',
	 'image':'song1.jpg'
	},
	{
			'name': 'Humma Song',
			'artist': ' Shashaa Tirupati',
			'album': 'Ok Jaanu',
			'duration': '3:15',
			'fileName': 'song2.mp3',
	'image':'song2.jpg'
	},
	{
			'name': 'Nashe Si Chadh Gayi',
			'artist': 'Arijit Singh',
			'album': 'Befikre',
			'duration': '2:34',
			'fileName': 'song3.mp3',
	'image':'song3.jpg'
	},
	{
			'name': 'The Breakup Song',
			'artist': 'Nakash Aziz, Arijit Singh',
			'album': 'Ae Dil Hai Mushkil',
			'duration': '2:29',
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
	/* for (var i = 0; i < fileName.length ; i++)
	{
		addSongNameClickEvent(fileName[i],i+1)
	}  */


	/* $('#song1').click(function() {
			var audio = document.querySelector('audio');
			audio.src = fileNames[0];
			audio.play();
			//toggleSong();
			var currentSong = audio.src;
			if(currentSong.search(fileNames[0]) != -1)
				{
					console.log('If statement executing');
					toggleSong();
				}
				else
				{
					console.log('else statement executing');
					audio.src = fileNames[0];
					toggleSong();
				}
		});

		$('#song2').click(function() {
			var audio = document.querySelector('audio');
			audio.src = fileNames[1];
			audio.play();
			toggleSong();
			if(audio.src == fileNames[1])
				var currentSong = audio.src;
			if(currentSong.search(fileNames[1]) != -1)
				{
				toggleSong();
				}
				else {
				audio.src = fileNames[1];
				toggleSong();
				}
		});

		$('#song3').click(function() {
			var audio = document.querySelector('audio');
			audio.src = fileNames[2];
			audio.play();
			toggleSong();
			if(audio.src == fileNames[2])
			var currentSong = audio.src;
			if(currentSong.search(fileNames[2]) != -1)
				{
					toggleSong();
				}
				else {
					audio.src = fileNames[2];
					toggleSong();
				}
		});

		$('#song4').click(function() {
			var audio = document.querySelector('audio');
			audio.src = fileNames[3];
			audio.play();
			toggleSong();
			if(audio.src == fileNames[3])
			var currentSong = audio.src;
			if(currentSong.search(fileNames[3]) != -1)
				{
					toggleSong();
				}
				else {
					audio.src = fileNames[3];
					toggleSong();
				}
		});

	 */
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

	/* var songName1 = 'Badri Ki Dulhania (Title Track)';
	var songName2 = 'Humma Song';
	var songName3 = 'Nashe Si Chadh Gayi';
	var songName4 = 'The Breakup Song';
	var songList = ['Badri Ki Dulhania (Title Track)','Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song'];
	var artistList = ['Neha Kakkar',' Monali Thakur',' Ikka Singh', 'Dev Negi'];
	var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
	var durationList = ['2:56','3:15','2:34','2:29'];
	 */


	window.onload = function() {
		changeCurrentSongDetails(songs[0]);
		/* for(var i=0;i<=songList.length;i++){
			var name= "#song"+ (i+1);
			var song=$(name);
		song.find('.song-name').text(songList[i]);
		song.find('.song-artist').text(artistList[i]);
		song.find('.song-album').text(albumList[i]); // Added
		song.find('.song-length').text(durationList[i]);
		} */

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


		/*$('#song1 .song-artist').text(artistList[0]);
		$('#song2 .song-artist').text(artistList[1]);
		$('#song3 .song-artist').text(artistList[2]);
		$('#song4 .song-artist').text(artistList[3]); */
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
		if (name.length > 2) {
			var message = "Welcome, " + name;
			$('.main .user-name').text(message);
			$('.welcome-screen').addClass('hidden');
			$('.main').removeClass('hidden');
		} else {
			$('#name-input').addClass('error');
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
	$('#songs').DataTable({
	        paging: false
	    });
