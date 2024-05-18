function make_album (artist_name:string, title_album:string, track?: number){
    let album : {artist: string, title: string, track?: number}={
        artist: artist_name,
        title: title_album
    };

    if(track !== undefined){
        album.track = track;
    }
    return album;
}

let album1 =make_album("Arfat", "Artist title 1");
let album2 = make_album("Asif", "Album title 2");
let album3 = make_album("kamran", "Album title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);

