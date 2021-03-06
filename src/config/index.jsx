let DEV_ENV = process.env.NODE_ENV;
const isDev = DEV_ENV === 'development';
const isStaging = DEV_ENV === 'staging';
const isProd = DEV_ENV === 'production';
let API_URL;
let ANDELA_API_BASE_URL;
let BASE_URL;

if (isDev) {
  API_URL = `${window.location.protocol}//${window.location.host}/api`;
  ANDELA_API_BASE_URL = 'https://api.andela.com';
  BASE_URL = 'http://wire.andela.com:8080';
} else if (isStaging) {
  API_URL = 'https://api-staging.wire.herokuapp.com/api';
  ANDELA_API_BASE_URL = 'https://api.andela.com';
  BASE_URL = 'https://staging.wire.herokuapp.com';
} else if (isProd) {
  API_URL = 'https://api.wire.andela.com/api';
  ANDELA_API_BASE_URL = 'https://api-prod.andela.com';
  BASE_URL = 'https://wire.andela.com';
}

const config = {
  ANDELA_API_BASE_URL,
  BASE_URL,
  API_URL,
  INCIDENTS_URL: `${API_URL}/incidents`,
  USERS_URL: `${API_URL}/users`,
  NOTES_URL: `${API_URL}/notes`,
  SEARCH_INCIDENTS_URL: `${API_URL}/search/incidents/`
};

export default config;
