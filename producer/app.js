'use strict';

/**
 * This app acts as a mock request server,
 * that post a random data to http://localhost:8000 (the pubsub server) every 2 seconds.
 */

var request = require('request');
var arrandom = require('arrandom');

var data = [
    {"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/448/course-complete-81fb30908f005de5c75e5376d041f05f.png"},
    {"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/443/complete-mastering-github-e998c0ab56c79b9074ad5e3c1427691a.png"},
    {"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/435/completed-javascript-best-practices-320e73d2694215bc24264e74a2f76528.png"},
    {"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/392/completed-shaping-up-with-angular-js-83ceb89bd5255391f25230727ae3f019.png"},
    {"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/385/completed-exploring-google-maps-for-ios-e91f4a65f676703091a312d8bc05393d.png"},
    {"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/378/completed-surviving-apis-with-rails-482f87efd9827f52ecaa027f733592cb.png"}
]

var requestObj = {
    json: data,
    method: 'POST',
    url: 'http://localhost:8000'
};

(function _request(){
    requestObj.json = [arrandom(data)[0]];
    request(requestObj, function(err){
        if(err) console.log(err);
        setTimeout(_request, 2000);
    });
})();