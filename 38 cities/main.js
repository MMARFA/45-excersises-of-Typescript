function describe_cities(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log(" ".concat(city, " is in ").concat(country));
}
describe_cities("karachi");
describe_cities("lahore");
describe_cities("Dubai", "UAE");
