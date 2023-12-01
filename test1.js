const userService = {
  currentFilter: 'active',
  users: [
    {name: 'John', email: 'llll', status: 'active'},
    {name: 'Mark', email: '', status: 'deleted'},
  ],
  getFilteredUsers: function() {
    return this.users.filter(function(user) {
      console.log(this)
      console.log(user.email, this.currentFilter);
      return this.currentFilter === user.status;
    })
  }
}
console.log(userService.getFilteredUsers());
