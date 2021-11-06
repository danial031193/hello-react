export const fetchRepos = async (search, page = 1) => {
  const actualSearch = search === '' ? 'stars:%3E1' : search;

  const URL = `https://api.github.com/search/repositories?q=${actualSearch}&sort=stars&per_page=10&page=${page}`;

  return fetch(URL).then((value) => value.json());
};

export const fetchRepo = async (id) => {
  const URL = `https://api.github.com/repos/${id}`;

  return fetch(URL).then((value) => value.json());
};

export const fetchRepoContributors = async (id) => {
  const URL = `https://api.github.com/repos/${id}/contributors?per_page=10&page=1`;

  return fetch(URL).then((value) => value.json());
};
