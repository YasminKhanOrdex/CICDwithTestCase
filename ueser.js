class User {
  static all() {
    return fetch('http://reactnative.dev/movies.json').then(response => {
      // console.log(response);
      return response.json();
    });
  }
}
export default User;
