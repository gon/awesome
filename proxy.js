var ical = require('ical')
var ICAL_URL = 'http://www.google.com/calendar/ical/neo.com_jm3ba4ahl77t0f47602r85uhuo%40group.calendar.google.com/public/basic.ics'
var http = require('http')

http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  ical.fromURL(ICAL_URL, {}, function(err, data) {
    res.end(JSON.stringify(data))
  })
}).listen(8001)
