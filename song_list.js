//song list
let All_song = [
    {
      name: "Purple Dream",
      path: "music/1.mp3",
      img: "image/1.jpg",
      Artist: "Ghostrifter Official"
    },
    {
      name: "Melody of Nature",
      path: "music/2.mp3",
      img: "image/2.jpg",
      Artist: "Zakhar Valaha"
    },
    {
      name: "Soft_Day",
      path: "music/3.mp3",
      img: "image/3.jpg",
      Artist: "PeriTune"
    },
    {
      name: "One Love - Emotional Piano + Strings",
      path: "music/4.mp3",
      img: "image/4.jpg",
      Artist: "Keys of Moon"
    },
    {
      name: "Rain On My Soul",
      path: "music/5.mp3",
      img: "image/5.jpg",
      Artist: "Spheria"
    },
    {
     name: "Sweet",
     path: "music/6.mp3",
     img: "image/1.jpg",
     Artist: "LIQWYD"
    },
    {
      name: "Winter Spa",
      path: "music/7.mp3",
      img: "image/2.jpg",
      Artist: "Alex-Productions"
     }
 ];
 /you can add more song & images from you computer/
 
 
 
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img" id="song_img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].Artist}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };