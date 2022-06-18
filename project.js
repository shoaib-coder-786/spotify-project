console.log("hello shoaib");
//intitalise the variables
let songindex =0;
let audioplay = new Audio('./songs/1.mp3');
let masterplay = document.getElementById("masterPlay");
let myprogressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let coverimagess = document.getElementById("container");
let songs=[
    {songname : 'salem-namestay' , filepath:'./songs/1.mp3' , coverimage : './covers/1.jpg'},
    {songname : 'baby ko base basnd hai' , filepath:'./songs/2.mp3' , coverimage : './covers/2.jpg'},
    {songname : 'dekha ja tujhay phli baar' , filepath:'./songs/3.mp3' , coverimage : './covers/3.jpg'},
    {songname : 'bhagwan kaha hai tu' , filepath:'./songs/4.mp3' , coverimage : './covers/4.jpg'},
    {songname : 'iswar allah tera naam' , filepath:'./songs/5.mp3' , coverimage : './covers/5.jpg'},
    {songname : 'baby golden sonam de' , filepath:'./songs/6.mp3' , coverimage : './covers/6.jpg'},
    {songname : 'tera hua ' , filepath:'./songs/7.mp3' , coverimage : './covers/7.jpg'},
    {songname : 'dj wale babu gana baja de' , filepath:'./songs/8.mp3' , coverimage : './covers/8.jpg'},
    // {songname : 'sittii maar sitti maar ' , filepath:'./songs/9.mp3' , coverimage : './covers/9.jpg'},
    // {songname : 'chamak challoo chel chabeli' , filepath:'./songs/10.mp3' , coverimage : './covers/10.jpg'},   
];

// audioplay.play();   
// music play/pause/next/previous handle
masterplay.addEventListener('click' , ()=>{

    
      
    //   
    // 
    if(audioplay.paused || audioplay.currentTime<=0){  
           audioplay.play();

          masterplay.classList.remove ('fa-play-circle');
       masterplay.classList.add('fa-pause-circle');
    gif.style.opacity =1;
    }
else{
          audioplay.pause();
    masterplay.classList.remove("fa-pause-circle");
       masterplay.classList.add("fa-play-circle");
       gif.style.opacity =0;
    }
     })



// listen event
audioplay.addEventListener('timeupdate' ,()=>{
    // console.log("time updated");
    let progress = parseInt((audioplay.currentTime/audioplay.duration)*100);
    myprogressBar.value = progress;
})
 
myprogressBar.addEventListener('change' ,()=>{
audioplay.currentTime = myprogressBar.value *audioplay.duration/100;


})


const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
}  )
  
  }

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{

    element.addEventListener('click' ,(e)=>{
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');  
        masterSongName.innerText = songs[songindex].songname;
       e.target.classList.add('fa-pause-circle');

        audioplay.src = `./songs/${songindex+1}.mp3`;
        audioplay,currentTime =0;
        audioplay.play();
        gif.style.opacity =1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})


// previous and next button

document.getElementById('nexts').addEventListener('click', ()=>{
    if(songindex>7){
        songindex = 0
    }
    else{
        songindex += 1;
    }
 
    masterSongName.innerText = songs[songindex].songname;
       audioplay.src = `./songs/${songindex+1}.mp3`;


    audioplay,currentTime =0;
    audioplay.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<0){
        songindex = 7;
    }
    else{
        songindex -= 1;
    }
 
    masterSongName.innerText = songs[songindex].songname;

       audioplay.src = `./songs/${songindex+1}.mp3`;
    audioplay,currentTime =0;
    audioplay.play();

    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

// function fn(){
//        fn();
// };