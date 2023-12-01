// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// Данные на вход
const people = [,
  {
    name: 'Alex',
    city: 'Moscow',
  },
  {
    name: 'Ivan',
    city: 'Moscow',
  },
  {
    name: 'Alex',
    city: 'Moscow',
  },
  {
    name: 'Ivan',
    city: 'Moscow',
  },
  {
    name: 'Joe',
    city: 'New York'
  },
  {
    name: 'Johan',
    city: 'Berlin'
  },
]

const groupByCity = (array) => {
  return array.reduce((acc, cur) => {
    const {name, city} = cur;

    if(acc.hasOwnProperty(city)) {

      if(!Array.isArray(acc[city])) {
        acc[city] = [acc[city], name]
      } else {
        acc[city].push(name);
      }

    } else {
      acc[city] = name;
    }

    return acc;
  }, {})
}

console.log(groupByCity(people));
// Данные на выход
/*
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
*/
