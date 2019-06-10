Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log);

function attachTitle(string) {
    return (`DR. ${string}`);
}