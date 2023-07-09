function make_album(artist:string, album:string, tracks?:number) {
    var album_obj = {}
    if (tracks === void 0) 
    { album_obj = {
        "artist": artist,
        "album": album,
        "tracks": tracks
    };
    }else{
        album_obj = {
            "artist": artist,
            "album": album,
        };
    }
    return album_obj;
}

console.log(make_album("rahat" , "My Album" , 10));
console.log(make_album("Old" , "My Album" , 10));
console.log(make_album("Goldies" , "My Album"));
