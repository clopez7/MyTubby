const server = "http://dojo:3000/videos"

export function createVideo(title, link) {
    const obj = {};
    obj.title = title;
    obj.link = link
    return obj;
}
export function displayVideos(v){
    v.forEach(function(video) {
        document.getElementById("video-list").innerHTML += "<article id='video-list' class='video-article'><a target='_blank' href='"+video.link+"'>"+video.title+"</a></article>"
    })
}
export function appendVideo(v){
    document.getElementById("video-list").innerHTML += "<article id='video-list' class='video-article'><a href='"+v.link+" target='_blank''>"+v.title+"</a></article>"
}
export function fetchVideos(){
  fetch(server, {
    "method": "GET"
  })
  .then(result => {
    return result.json()
  })
  .then(data => {
      displayVideos(data)
    })
  .catch(err => {
    displayVideos([{ "title": "There has been an error while fetching the videos.", "link": ""}])
    }
  )
}
