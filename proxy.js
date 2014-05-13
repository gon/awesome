var GCAL_XML = 'http://www.google.com/calendar/feeds/neo.com_jm3ba4ahl77t0f47602r85uhuo%40group.calendar.google.com/public/basic'
var http = require('http')
var request = require('request')

http.createServer(function(req, res) {
  request(GCAL_XML).pipe(res)
}).listen(8001)
