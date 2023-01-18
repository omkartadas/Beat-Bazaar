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
        song_name: "Teri Ada",
        path: "songs/1.mp3",
        song_artist: "Mohit Chauhan"

    },
    {
        song_name: "Janib",
        path: "songs/2.mp3",
        song_artist: "Arijit Singh"

    },
    {
        song_name: "Dhaagon Se Baandha",
        path: "songs/3.mp3",
        song_artist: "Arijit Singh"

    },
    {
        song_name: "Kesariya",
        path: "songs/4.mp3",
        song_artist: "Arijit Singh"

    },
    {
        song_name: "Deva Deva",
        path: "songs/5.mp3",
        song_artist: "Arijit Singh"

    },
    {
        song_name: "Channa Ve",
        path: "songs/6.mp3",
        song_artist: "Arijit Singh"

    },
    {
        song_name: "Humdard",
        path: "songs/7.mp3",
        song_artist:"Arijit Singh"

    },
    {
        song_name: "Tera Fitoor",
        path: "songs/8.mp3",
        song_artist: "Arijit Singh"

    },
    {
        song_name: "Rait zara si",
        path: "songs/9.mp3",
        song_artist: "Arijit Singh"

    },
    {
        song_name: "Mere Yara",
        path: "songs/10.mp3",
        song_artist: "Arijit Singh"

    },
    {
        song_name: "Road Trip",
        path: "songs/11.mp3",
        song_artist: "Arijit Singh"

    },
    {
        song_name: "Paakhi Hua re",
        path: "songs/12.mp3",
        song_artist: "Arijit Singh"

    },
    {
        song_name: "All MashUp",
        path: "songs/13.mp3",
        song_artist: "Arijit Singh"

    },
    {
        song_name: "Aaj Dil Shayraana",
        path: "songs/15.mp3",
        song_artist: "Arijit Singh"

    },
    {
        song_name: "Love MashUp",
        path: "songs/16.mp3",
        song_artist: "Arijit Singh"

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










