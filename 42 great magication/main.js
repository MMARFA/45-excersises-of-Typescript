function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
var magicians_names = ["harry porter", "arfat", "asif"];
var great_magicians = make_great(magicians_names);
console.log(great_magicians);
show_magicians(great_magicians);
