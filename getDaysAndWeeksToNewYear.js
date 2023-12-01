const getDaysAndWeeksToNewYear = () => {
  const date = new Date();
  const endDate = new Date(`2024-01-01`)
  const ms = endDate - date;

  const day = 24 * 60 * 60 * 1000;
  const days = Math.round(ms / day);
  const weeks = Math.round(days / 7);

  return {
    days,
    weeks
  }
}

console.log(getDaysAndWeeksToNewYear());
