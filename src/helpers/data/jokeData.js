import axios from 'axios';

const baseUrl = 'https://official-joke-api.appspot.com/random_ten';

const getJoke = () => new Promise((resolve, reject) => {
  axios.get(baseUrl)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getJoke;
