function make_album(artist_name, title_album, track) {
    var album = {
        artist: artist_name,
        title: title_album
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
var album1 = make_album("Arfat", "Artist title 1");
var album2 = make_album("Asif", "Album title 2");
var album3 = make_album("kamran", "Album title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
