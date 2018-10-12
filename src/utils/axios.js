import axios from 'axios';

export default function(url, params, method = 'GET', headers) {
  if (!url) return null;
  headers = Object.assign(
    { 'Content-Type': 'application/json; charset=utf-8' },
    headers
  );
  return axios({
    method,
    url,
    params,
    baseURL: 'https://some-domain.com/api/',
    headers
  })
    .then(res => res.json())
    .catch(error => ({ error, result: null }));
}
