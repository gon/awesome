updateUtilization()

function updateUtilization() {
  console.log('hi')
  var headers = {
    Authorization: 'gXhP9wJ-n_DLG6ZLMwx8'
  }
  var data = {
    'office_id': 4,
    'snap_date': '2014-05-13'
  }
  var options = {
    url: 'http://t2.neo.com/api/v1/utilization_summaries',
    headers: headers,
    success: onData,
    error: onError,
    data: data,
    dataType: 'json'
  }

  return $.ajax(options)

  function onError(xhr, textStatus, errorThrown) {
    console.log('error', textStatus, errorThrown)
    console.log(xhr.responseXML, xhr.responseText)
  }
  function onData(data) {
    console.log('onData', data)
    var u = parseInt(data.snapshots[0].utilization, 10)
    var upercent = Math.round(u) + '%'
    $('.utilization span').text(upercent)
    $('.utilization').css({ height: upercent })
  }
}
