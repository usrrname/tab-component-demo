export const getContent = (arg: number) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${arg}/posts`)
    .then((data) => data.json())
    .catch((error) => console.warn(error));
