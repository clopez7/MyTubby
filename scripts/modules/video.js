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
        console.log(video.title)
        console.log(video.link)
        document.getElementById("video-list").innerHTML += 
        "<article id='video-list' class='video-article'><a href='"+video.link+"'>"+video.title+"</a></article>";
    });  
}