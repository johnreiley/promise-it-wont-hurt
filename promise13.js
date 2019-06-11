const qhttp = require('q-io/http');


qhttp.read("http://localhost:7000")
    .then((id) => {
        return qhttp.read("http://localhost:7001/" + id);
    })
    .then((data) => {
        console.log(JSON.parse(data.toString()));
    })
    .then(null, console.error)
    .done();