var userName = ["Arfat", "Asif", "kamran", "admin", "hussain"];
userName = [];
if (userName.length === 0) {
    console.log("your array is empty we need to find some user!");
}
else {
    userName.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("hello ".concat(oneUser, ",would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thank you for logging in again"));
        }
    });
}
