'use strict';

var axon = require('axon');
var sock = axon.socket('pub');

sock.bind(8001);

/**
 * Send a badge to the publish socket.
 * @param badge
 */
exports.send = function(badge){
    sock.send(badge);
};
