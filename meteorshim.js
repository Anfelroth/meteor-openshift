#!/bin/env node

// Setup env
var APP_DNS = process.env.OPENSHIFT_APP_DNS_ALIAS || process.env.OPENSHIFT_APP_DNS;

process.env.ROOT_URL = "https://" + APP_DNS || "http://localhost";
process.env.MONGO_URL = process.env.MONGOLAB_URI || process.env.MONGODB_URL;
process.env.PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
process.env.BIND_IP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
process.env.DDP_DEFAULT_CONNECTION_URL = 'http://' + APP_DNS + ':8443';

// Show connection details on startup
console.log("************ Meteor 1.3 Env is ready ************");

require('./terminator');
require('./bundle/main.js');
