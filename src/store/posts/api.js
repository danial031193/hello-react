export const fetchPosts = async () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((value) => value.json());
};
