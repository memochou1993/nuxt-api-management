import toRawObject from './to-raw-object';

const fetch = (service, method) => (
  (url, options) => (
    useFetch(url, {
      baseURL: useRuntimeConfig().public[`${service}ApiUrl`],
      method,
      ...(options?.body instanceof FormData ? options : toRawObject(options)), // prevent interdependence
    })
  )
);

const createClient = (service) => {
  const methods = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'];
  const map = {};
  methods.forEach((method) => {
    map[method.toLowerCase()] = fetch(service, method);
  });
  return map;
};

export default createClient;
