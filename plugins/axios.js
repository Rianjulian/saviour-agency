export default ({ $axios, env }) => {
  const token = env.VUE_APP_TOKEN; // Access the token from the environment

  $axios.onRequest(config => {
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`;
      config.headers.common['Accept'] = 'application/json';
    }
  });
}