const tracks=document.querySelectorAll(".marquee-track")
tracks.forEach(track=>{
    track.innerHTML +=track.innerHTML;
})