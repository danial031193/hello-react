export const fetchPosts = async (id) => {
  let URL = 'https://jsonplaceholder.typicode.com/posts';

  if (id) {
    URL += `?userId=${id}`;
  }

  return fetch(URL).then((value) => value.json());
};
