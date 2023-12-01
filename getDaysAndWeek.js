//) В функцию передается строка в формате "dd.mm.yyyy", требуется вывести порядковый номер дня и недели

//14.11.2023 - 365 -> 267 ---- 52 -- 48

const getDayInfo = (date) => {
  const splitedDate =  date.split('.');
  const changedDate = splitedDate.reverse().join('-');
  const year = splitedDate[0];
  const newDate = new Date(changedDate);
  const startDate = new Date(`${year}-01-01`)
  const ms = newDate - startDate;

  const day = 24 * 60 * 60 * 1000;
  const days = Math.round(ms / day) + 1;
  const week = Math.round(days / 7);

  return {
    days,
    week
  }
}

console.log(getDayInfo("12.11.2023"))
console.log(getDayInfo("12.11.2024"))
