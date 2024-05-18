function create_cars(manufacturers, models) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var cars = {
        manufacturers: manufacturers,
        models: models
    };
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        cars[key.trim()] = value.trim();
    });
    return cars;
}
var my_car = create_cars("Toyota", "Prado", "colour: Black boss", "sunroof: True", "year: 2013");
console.log(my_car);
