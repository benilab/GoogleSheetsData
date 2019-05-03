/**
 * Console log content from googlesheet
 */
function checkFields(spreadsheetId, range) {
  gapi.client.sheets.spreadsheets.values
    .get({
      spreadsheetId,
      range,
    })
    .then(
      function(response) {
        console.log(response.result.values)
      },
      function(response) {
        console.log('Error: ' + response.result.error.message)
      }
    )
}
