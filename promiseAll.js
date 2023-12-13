function myPromises(promises) {
  return new Promise(function (resolve, reject) {
    if(!Array.isArray(promises)) {
      reject(new Error('It is not promises array'))
    }

    const results = [];
    let completedCount = 0;

    promises.forEach((prom, index) => {
      Promise.resolve(prom)
      .then(result => {
        results[index] = result;
        completedCount++;

        if(completedCount === results.length) {
          resolve(results);
        }
      })
      .catch(error => {
        reject(error);
      })
    })

    if(promises.length === 0) {
      resolve(results)
    }
  })
}

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

myPromises([promise1, promise2, promise3])
  .then(results => console.log('Resolved promises', results))
  .catch(error => console.log(error));

function promiseAll(promises) {

  return new Promise((resolve, reject) => {
    const finishedPromises = [];
    let secondIndex = 0;

    for(let index in promises) {
      promises[index]
        .then((data) => {
          finishedPromises[index] = data;
          secondIndex++;
          if(secondIndex === promises.length) resolve(finishedPromises);
        })
        .catch(rej => reject(rej));
    }
  })
}


const resolve = (value, timeout) => new Promise((resolve) => {
  return setTimeout(res, timeout, value);
})

const reject = (value, timeout) => new Promise((_, reject) => {
  return setTimeout(reject, timeout, value);
})

promiseAll([resolve(1, 100), resolve(2, 200), resolve(3, 100)]).then(res => console.log(res));
promiseAll([reject(1, 100), reject(2, 500), reject(3, 1000)]).catch(err => console.log(err))