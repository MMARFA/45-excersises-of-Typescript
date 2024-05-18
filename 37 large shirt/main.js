function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I love typescript"; }
    console.log("creating a ".concat(size, " shirt with ").concat(printMessage, " prints on shirt"));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love javascript");
