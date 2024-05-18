var current_users = ["usman", "ali", "areeb", "zain", "usama"];
var new_users = ["hamza", "ayesha", "ali", "zain", "atif"];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user; });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});
