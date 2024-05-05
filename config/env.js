const debug = require('debug')('app:config:env');
const dotenv = require('dotenv');
dotenv.config();

debug('Loading environment');

const env = name => process.env[name.toUpperCase()];


module.exports = {

    NODE_ENV: env('node_env') || 'development',

    HOST: env('host') || 'localhost', 

    PORT: env('port') || 3000,

    EBAY_ID: env('ebay_id') || 'sample_id',

    EBAY_SECRET: env('ebay_secret') || 'sample_secret',

    EBAY_IS_SANDBOX: env('ebay_is_sandbox') === 'true' || true,

    EBAY_DEV_ID: env('ebay_dev_id') || 'sample_dev_id',

    EBAY_RUNAME: env('ebay_runame') || 'sample_runame',

    EBAY_AUTH_TOKEN: env('ebay_auth_token') || 'sample_token',
};