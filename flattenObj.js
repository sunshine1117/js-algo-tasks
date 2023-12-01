/*
Задача: Напишите функцию flattenObject(obj), которая принимает в качестве
аргумента вложенный объект obj и возвращает новый объект,
в котором все свойства объекта obj "разглажены"
(преобразованы в одноуровневую структуру), с использованием точечной нотации
для представления иерархии свойств.
*/

const obj = {
  a: {
    b: {
      c: 1,
      d: 2
    },
    e: 3
  },
  f: 4
};


  const flattenObject = (obj, parentKey = '') => {
    if (typeof obj !== 'object') {
      const newObj = {};
      newObj[parentKey] = obj;
      return newObj;
    }

    const newObj = {};

    for (const key in obj) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      const flattened = flattenObject(obj[key], newKey);
      Object.assign(newObj, flattened);
    }

    return newObj;
}

const flattenedObj = flattenObject(obj);
// Ожидаемый результат: { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, 'f': 4 } || { "f": 4, "a.e": 3, "a.b.c": 1, "a.b.d": 2 }
