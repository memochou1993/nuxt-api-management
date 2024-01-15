/* eslint-disable no-param-reassign */
const client = createClient('server');

const handleRequest = ({ options }) => {
  const token = ''; // from store
  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };
};

const handleResponse = ({ response }) => {
  if (response.status === 401) {
    navigateTo('/sign-out');
    const { _data } = response;
    console.log(_data.message);
  }
};

const fetchPosts = () => client.get('/posts', {
  onRequest: handleRequest,
  onResponse: handleResponse,
});

export default {
  fetchPosts
};
