function make_sandwiches(...items: string[]){
    console.log("\nmaking the functions of the items :\n ");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nnow enjoy sandwiches\n");
}

make_sandwiches("Chicken", "Cheese", "mayo", "egg", "cabagge", "tomato");

make_sandwiches("bread", "butter")

make_sandwiches("Chicken", "Cheese", "mayo", "egg", "cabagge", "tomato", "onion", "butter")