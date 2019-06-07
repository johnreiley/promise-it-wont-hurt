let promise1 = Promise.reject(new Error('SECRET VALUE'));


let promise2 = Promise.resolve('YOU ARE GREAT');

promise1.catch((e) => console.log(e.message))
promise2.then(console.log);