console.log("Welcome Spotify");

const boxes = document.getElementsByClassName("box");
let prevBtn = document.getElementById("prevBtn");
let playBtn = document.getElementById("playBtn");
let nextBtn = document.getElementById("nextBtn");
let indexNo = 0;
let range = document.getElementById("range");
const song = new Audio('songs/song1.mp3');
let songName = document.getElementById("songName");
let songArtist = document.getElementById("songArtist");
let songHeading = document.getElementsByClassName("songHeading");
let searchBox = document.getElementById("searchBox");
let searchBtn = document.getElementById("searchBtn");



for (let i = 0; i < 15; i++) {
    let box = boxes[i];
    box.addEventListener('click', () => {
        // alert(box.id);
        indexNo = box.id;
        songLoad(indexNo);
    });

}


let checkIndex = 0;

searchBtn.addEventListener('click', () => {

    for (let i = 0; i < 15; i++) {

        let content = (searchBox.value).toUpperCase();
        let presentContent = (songHeading[i].innerHTML).toUpperCase();
       

        if ((presentContent).indexOf(content) > -1) {
           
            songHeading[i].parentElement.parentElement.parentElement.firstElementChild.style.textAlign = "center";
            checkIndex = i;

            songHeading[i].parentElement.style.display = "";
            


        } else {


            songHeading[i].parentElement.parentElement.parentElement.firstElementChild.style.display = "none";
            songHeading[checkIndex].parentElement.parentElement.parentElement.firstElementChild.style.display = "";




            songHeading[i].parentElement.style.display = "none";

        }



    }

});













const songs = [

    {
        song_name: "1",
        path: "songs/1.mp3",
        song_artist: "meow"

    },
    {
        song_name: "2",
        path: "songs/2.mp3",
        song_artist: "meow"

    },
    {
        song_name: "3",
        path: "songs/3.mp3",
        song_artist: "meow"

    },
    {
        song_name: "4",
        path: "songs/4.mp3",
        song_artist: "meow"

    },
    {
        song_name: "5",
        path: "songs/5.mp3",
        song_artist: "meow"

    },
    {
        song_name: "6",
        path: "songs/6.mp3",
        song_artist: "meow"

    },
    {
        song_name: "7",
        path: "songs/7.mp3",
        song_artist:"meow"

    },
    {
        song_name: "8",
        path: "songs/8.mp3",
        song_artist: "meow"

    },
    {
        song_name: "9",
        path: "songs/9.mp3",
        song_artist: "meow"

    },
    {
        song_name: "10",
        path: "songs/10.mp3",
        song_artist: "meow"

    },
    {
        song_name: "11",
        path: "songs/11.mp3",
        song_artist: "meow"

    },
    {
        song_name: "12",
        path: "songs/12.mp3",
        song_artist: "meow"

    },
    {
        song_name: "13",
        path: "songs/13.mp3",
        song_artist: "meow"

    },
    {
        song_name: "15",
        path: "songs/15.mp3",
        song_artist: "meow"

    },
    {
        song_name: "16",
        path: "songs/16.mp3",
        song_artist: "meow"

    },
    
];

let isPlay = false;

prevBtn.addEventListener('click', () => {
    if (indexNo >= 0) {
        indexNo -= 1;
        songLoad(indexNo);
    }
    else {
        indexNo = 14;
    }
});

playBtn.addEventListener('click', () => {

    if (isPlay === false) {
        songLoad(indexNo);
        playBtn.src = "images/pause_button.png";
        isPlay = true;
    }
    else {

        song.pause();
        playBtn.src = "images/play_button.png";
        isPlay = false;
    }

});








function songLoad(indexNo) {
    song.src = songs[indexNo].path;
    songName.innerHTML = songs[indexNo].song_name;
    songArtist.innerHTML = songs[indexNo].song_artist;

    song.play();
    playBtn.src = "images/pause_button.png";
    isPlay = true;


}





nextBtn.addEventListener('click', () => {

    if (indexNo < 15) {
        indexNo += 1;
        songLoad(indexNo);

    }
    else {
        indexNo = 0;

    }
});

song.addEventListener('timeupdate', () => {
    range.value = (song.currentTime / song.duration) * 100;

    if (song.currentTime >= song.duration) {
        indexNo += 1;
        songLoad(indexNo);
    }

});

range.addEventListener('change', () => {
    song.currentTime = (range.value * song.duration) / 100;

});










