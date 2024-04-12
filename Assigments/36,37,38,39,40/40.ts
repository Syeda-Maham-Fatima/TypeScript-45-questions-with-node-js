//Question no 40;

function make_album(artist_name:string,album_title:string,tracks?:number){
    let album:{artist:string,title:string,tracks?:number}={
        artist:artist_name,
        title:album_title,
  }
  if(tracks !==undefined){
    album.tracks= tracks;
  }

  return album;
}
//calling 3 times function with different values& creating 3 values;
//create variable;
let album1=make_album("Maham","Album title no 1");
//printing values ;
//console.log(album1);
let album2=make_album("Umair","album title 2");
//calling function with 3rd parameter;
let album3=make_album("Ali","album title 3",10);
console.log(album1);
console.log(album2);
console.log(album3);