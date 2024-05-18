var guestList = ["Arfat", "kamran", "atif"];
var dontCome = guestList[1];
console.log(dontCome, "nai aha sakta");
guestList.splice(0, 1, "hussain");
console.log("Good news ! we found a big table for dinner");
guestList.unshift("asif");
guestList.push("sufiyan");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Ahmed");
console.log("updated list for guest");
guestList.forEach(function (guestList) { return console.log("salam ".concat(guestList, " , would you like to dinner with me?")); });
console.log("unfortunataly , the new dinner table wont arrive to timeso it can only invite two guest to dinner with me");
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("sorry , ".concat(removeGuest, " i cant invite you to dinner"));
}
console.log("invitations to the last to guest");
guestList.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, " you are still invited for the dinner")); });
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
