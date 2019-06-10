function parsePromised(json) {
    let promise = new Promise((fulfill, reject) => {
        try {
            let object = JSON.parse(json);
            fulfill(object);
        } catch (e) {
            reject(e);
        }
    });

    return promise;
}

function onReject(e) {
    console.log(e.message);
}


parsePromised(process.argv[2])
    .then(null, onReject);