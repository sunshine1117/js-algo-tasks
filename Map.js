class Map {
  constructor() {
    this.collection = {};
    this.length = 0;
  }

  has(key) {
    return this.collection.hasOwnProperty(key);
  }

  add(key, value) {
    this.collection[key] = value;
    this.length++;
  }

  remove(key) {
    delete this.collection[key];
    this.length--;
  }

  get(key) {
    if(this.has(key)) {
      return this.collection[key];
    } else {
      return undefined;
    }
  }

  values() {
    return Object.values(this.collection);
  }

  size() {
    return this.length;
  }

  clear() {
    Object.keys(this.collection).forEach(key => delete this.collection[key]);
    this.length = 0;
  }
}

const map = new Map();

map.add('name', 'Anar');
map.add('lastName', 'Fariz')
console.log(map.get('name'))

console.log(map.size())
console.log(map.values())
map.remove('name')
console.log(map.size())
console.log(map.clear())
console.log(map.size())
