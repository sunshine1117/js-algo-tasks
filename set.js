class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  add(value) {
    if(this.has(value)) {
      return false;
    } else {
      this.dictionary[value] = value;
      this.length++;

      return true;
    }
  }

  remove(value) {
    const bool = delete this.dictionary[value];

    this.length--;

    return bool;
  }

  size() {
    return this.length;
  }

  union(other) {
    const newSet = new Set();
    this.values().forEach(value => newSet.add(value))
    other.values().forEach(value => newSet.add(value))
    return newSet;
  }

  intersection(other) {
    const newSet = new Set();

    this.values().forEach(value => {
      if(other.has(value)) {
        newSet.add(value)
      }
    })

    return newSet;
  }

  difference(other) {
    const newSet = new Set();

    this.values().forEach(value => {
      if(!other.has(value)) {
        newSet.add(value)
      }
    })

    return newSet;
  }

  isSubsetOf(other) {
    return this.values().every(value => other.has(value))
  }
}

const set = new Set();

set.add(1)
set.add(2)
set.add(3)
set.add(4)
set.add(5)
// console.log(set.dictionary)
// console.log(set.size())
// set.remove(1)
// set.remove(2)
// set.remove(3)

// console.log(set.dictionary)
// console.log(set.size())

// console.log(set.union(set))

const set1 = new Set();

set1.add(3)
set1.add(4)
set1.add(5)

const set2 = new Set();

set2.add(3)
set2.add(4)

console.log(set.intersection(set1))
console.log(set.difference(set1))
console.log(set2.isSubsetOf(set1));
console.log(set.isSubsetOf(set2));
