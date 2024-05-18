function make_sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nmaking the functions of the items :\n ");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nnow enjoy sandwiches\n");
}
make_sandwiches("Chicken", "Cheese", "mayo", "egg", "cabagge", "tomato");
make_sandwiches("bread", "butter");
make_sandwiches("Chicken", "Cheese", "mayo", "egg", "cabagge", "tomato", "onion", "butter");
