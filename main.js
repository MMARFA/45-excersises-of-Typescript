var guestList = ["Arfat", "kamran", "Asif"];
var dontCome = guestList[1];
console.log(dontCome, "nai aha sakta");
guestList.splice(0, 1, "hussain");
guestList.forEach(function (guestList) { return console.log("salam ".concat(guestList, " , would you like to dinner with me?")); });
