var localhost = window.location.protocol + '//' + window.location.hostname;
var port = window.location.port || '80';

window.ALERTER_CONFIG = {
    'oauthURL': localhost + ':' + port + '/security',
    'redirectToLoginTimeout': 10000,
    'mockupEnabled': true
};
