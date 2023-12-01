// Объект на вход
const object = {
  a: {
    d: {
      h: 4
    },
    e: 2
  },
  b: 1,
  c: {
    f: {
      g: 3,
      k: {}
    }
  }
};

const addLevels = (obj, level = 0) => {
  obj.level = level;

  if(typeof obj !== "object") {
    return;
  }

  for(const key in obj) {
    addLevels(obj[key], level+1);
  }

  return obj;
}

// Данные на выход

// updatedObject {
//   a: { d: { h: 4, level: 2 }, e: 2, level: 1 },
//   b: 1,
//   c: { f: { g: 3, k: [Object], level: 2 }, level: 1 },
//   level: 0
// }

// Object { a: { d: { h: 4 }, e: 2 }, b: 1, c: { f: { g: 3, k: {} } } }

console.log(addLevels(object))
