import { createVideo, videos } from './modules/video.js'

videos.forEach(function(video) {
    console.log(video.title)
    console.log(video.link)
    document.getElementById("video-list").innerHTML += 
    "<article id='video-list' class='video-article'><a href='"+video.link+"'>"+video.title+"</a></article>";
});

    







