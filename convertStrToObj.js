const str = 'one.two.three.four.five';

const convertStrToObj = (str) => {
  if(!str) return false;

  const splitedStr = str.split('.');
  const newObj = {};

  let currObj = newObj;

  for(let key of splitedStr) {
   currObj[key] = {};
   currObj = currObj[key];
  }

  return newObj;
}

console.log(convertStrToObj(str));

// RESULT
/*
{
  one: {
    two: {
      three: {
        four: {
          five: }
        }
      }
    }
  }
}
*/
