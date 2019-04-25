/**
 * Console log content from googlesheet
 */
function consoleloglistMajors() {
  gapi.client.sheets.spreadsheets.values
    .get({
      spreadsheetId: '1hBfH9vTXqV8CobzBlSHaKBec39t0gB5cyRMPhXUU0YY',
      range: 'Sheet1!A1:A5',
    })
    .then(
      function(response) {
        var range = response.result
        if (range.values.length > 0) {
          /*appendPre('Name, Major:')*/
          for (i = 0; i < range.values.length; i++) {
            var row = range.values[i]
            // Print columns A and E, which correspond to indices 0 and 4.
            console.log('This is the result' + row[0] + ', ' + row[4])
          }
        } else {
          console.log('No data found.')
        }
      },
      function(response) {
        console.log('Error: ' + response.result.error.message)
      }
    )
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content')
  var textContent = document.createTextNode(message + '\n')
  pre.appendChild(textContent)
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function listMajors() {
  gapi.client.sheets.spreadsheets.values
    .get({
      spreadsheetId: '1hBfH9vTXqV8CobzBlSHaKBec39t0gB5cyRMPhXUU0YY',
      range: 'Sheet1!A1:A5',
    })
    .then(
      function(response) {
        var range = response.result
        if (range.values.length > 0) {
          appendPre('Name, Major:')
          for (i = 0; i < range.values.length; i++) {
            var row = range.values[i]
            // Print columns A and E, which correspond to indices 0 and 4.
            appendPre(row[0] + ', ' + row[4])
          }
        } else {
          appendPre('No data found.')
        }
      },
      function(response) {
        appendPre('Error: ' + response.result.error.message)
      }
    )
}
