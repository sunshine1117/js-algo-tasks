function debounce(fn, delay) {
  let timer;
  return (...args) => {
    console.log(args)
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function check(a) {
  console.log(a);
  console.log('check');
}

const delay1000 = debounce((a) => check(a), 1000);
const delay2000 = debounce((a) => check(a), 2000);
const delay3000 = debounce((a) => check(a), 3000);
console.log(delay1000(163), delay2000(165), delay3000(167));
