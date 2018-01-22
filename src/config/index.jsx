const ConfigData = {
    development: {
        ANDELA_API_BASE_URL : 'https://api.andela.com',
        BASE_URL: 'http://wire.andela.com:8080'
    },
    staging: {
        ANDELA_API_BASE_URL : 'https://api.andela.com',
        BASE_URL: 'http://wire.now.sh'
    },
    production: {
        ANDELA_API_BASE_URL : 'https://api.andela.com',
        BASE_URL: 'http://wire.andela.com'
    },
};

export const config = ConfigData[process.env.NODE_ENV] || ConfigData['development'];
