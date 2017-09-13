const allConfig = {
  development: {
    ANDELA_API_BASE_URL: 'https://api-staging.andela.com',
    API_BASE_URL: 'http://app.nairobi.us/wire/api',
    BASE_URL: 'http://calm-dev.andela.com:3003',
  },
  production: {
    ANDELA_API_BASE_URL: 'https://api.andela.com',
    API_BASE_URL: 'http://app.nairobi.us/wire/api',
    BASE_URL: 'https://wire.andela.com',
  },
  staging: {
    ANDELA_API_BASE_URL: 'https://api-staging.andela.com',
    API_BASE_URL: 'http://app.nairobi.us/wire/api',
    BASE_URL: 'http://wire-andela.herokuapp.com',
  },
  testing: {
    ANDELA_API_BASE_URL: 'https://api.andela.com',
    API_BASE_URL: 'https://private-3b686-wire3.apiary-mock.com',
    BASE_URL: 'http://wire-dev.andela.com:3003',
  },
};

export const config = allConfig[process.env.NODE_ENV];
