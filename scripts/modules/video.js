export function createVideo(title, link) {
    const obj = {};
    obj.title = title;
    obj.link = link
    return obj;
}
export var videos = [
    {
         "title" : "Life on the Murder Scene",
         "link" : "https://www.youtube.com/watch?v=gUb_pJXVaoY"
    },
    {
        "title" : "TOP ÁLBUMES de los ÚLTIMOS 2 AÑOS (Yung Beef, Sticky M.A. , C. Tangana, Cruz Cafuné...) | Tier List",
        "link" : "https://www.youtube.com/watch?v=QLGKGCZc7jA"
    }
]
export function displayVideos(v){
    v.forEach(function(video) {
        document.getElementById("video-list").innerHTML += 
        "<article id='video-list' class='video-article'><a target='_blank' href='"+video.link+"'>"+video.title+"</a></article>";
    });  
}
export function appendVideo(v){
    document.getElementById("video-list").innerHTML += 
    "<article id='video-list' class='video-article'><a href='"+v.link+" target='_blank''>"+v.title+"</a></article>";
}