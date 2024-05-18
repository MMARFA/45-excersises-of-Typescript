function create_cars(manufacturers, models, ...options){
    let cars= {
        manufacturers: manufacturers,
        models: models
    };
    options.forEach(options => {
        let[key, value] = options.split(":")
        cars[key.trim()] = value.trim();
    });
    return cars;

}

let my_car = create_cars("Toyota", "Prado", "colour: Black boss", "sunroof: True","year: 2013" )

console.log(my_car);
