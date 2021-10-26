export function createVideo(title, link) {
    const obj = {};
    obj.title = title;
    obj.link = link
    return obj;
}

//This should be stored or fetched from somewhere
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