//Question no 40;
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling 3 times function with different values& creating 3 values;
//create variable;
var album1 = make_album("Maham", "Album title no 1");
//printing values ;
console.log(album1);
var album2 = make_album("Umair", "album title 2");
//calling function with 3rd parameter;
var album3 = make_album("Ali", "album title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
