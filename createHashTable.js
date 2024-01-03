let called = 0;
const hash = string => {
  called++;

  let hashed = 0;
  for (let i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }

  return hashed;
};

class HashTable {
  constructor() {
    this.collection = {
      1: {1: 'c', 2: 'd', 3: 'f'}
    };
  }

  add(key, value) {
    if(this.collection[hash(key)]) {
      this.collection[hash(key)][key] = value;
    } else {
      this.collection[hash(key)] = {}
      this.collection[hash(key)][key] = value;
    }
  }

  lookup(key) {
    if(this.collection[hash(key)]) {
      return this.collection[hash(key)][key];
    }

    return null;
  }

  remove(key) {
    delete this.collection[hash(key)][key];
    if (Object.keys(this.collection[hash(key)]).length == 0)
      delete this.collection[hash(key)];
  }
}
