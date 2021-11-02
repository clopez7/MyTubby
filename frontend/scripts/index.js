import  { fetchVideos }   from './modules/video.js'

var userLogged = false;

if( userLogged ){
    fetchVideos()
}else{
    
    // localStorage.setItem('myCat', 'Tom');
    // const cat = localStorage.getItem('myCat');
    // console.log(cat)
    

}