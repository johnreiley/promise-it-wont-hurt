first()
    .then(secret => second(secret))
    .then(console.log);