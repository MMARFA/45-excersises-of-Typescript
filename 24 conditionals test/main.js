var bike = "bike";
var uppercaseBike = "BIKE";
var two = 2;
var four = 4;
var cars = ["bughatti", "Alto", "nissan"];
console.log("Test 1: bike is equal to bike");
console.log(bike == "bike");
console.log("Test 2: bike is not equal to bike");
console.log(bike != "bike");
console.log("Test 3: Is BIKE is equal to bike after converting lower case?");
console.log(uppercaseBike.toLowerCase() == "bike");
console.log("Test 4: Is BIKE is not equal to bike after converting lower case?");
console.log(uppercaseBike.toLowerCase() != "bike");
console.log("Test 5: is two is equal to four");
console.log(2 == four);
console.log("test 6: is two is not equal to four");
console.log(2 != four);
console.log("test 7: is two is greater than zero");
console.log(2 > 0);
console.log("test 8: is two is less than zero");
console.log(2 < 0);
console.log("test 9: is two is greater than or equals to zero");
console.log(2 >= 0);
console.log("test 10: is two is less than or equals to zero");
console.log(2 <= 0);
console.log("Test 11: two is not equals to four and two is less than four");
console.log(two != 4 && two < 4);
console.log("Test 12: two is not equals to four and two is less than one");
console.log(two != 4 && two < 1);
console.log("Test 13: two is equals to four or two is less than four");
console.log(two == 4 || two < 4);
console.log("Test 14: two is equals to four or two is greater than four");
console.log(two == 4 || two > 4);
console.log("Test 15: is alto include in my array");
console.log(cars.includes("Alto"));
console.log("Test 16: is revo include in my array");
console.log(cars.includes("revo"));
