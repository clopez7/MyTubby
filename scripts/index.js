import  { createVideo, displayVideos, appendVideo}   from './modules/video.js'

var server = "http://localhost:3000/videos"

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
  console.error(err);
});