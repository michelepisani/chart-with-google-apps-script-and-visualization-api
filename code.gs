function doGet(e) {
  return HtmlService.createTemplateFromFile("index").evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function getChartData() {
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Chart in Web App");
  return sh.getRange(1, 1, sh.getLastRow(), sh.getLastColumn()-1).getValues();
}
