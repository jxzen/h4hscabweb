function doGet(request) {
    return HtmlService.createTemplateFromFile('Index').evaluate();
  }
  
  /* @Include JavaScript and CSS Files */
  function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
  }
  
  /* @Process Form */
  function processForm(formObject) {
    var url = "https://docs.google.com/spreadsheets/d/1thsKpkWnQl9m1Qq7xPZbU-PBZKyVUL5l5WuG1ytvLFk/edit#gid=1447059291";
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Data");
    
    ws.appendRow([formObject.professor,
                  formObject.course,
                  formObject.time,
                  formObject.availability,
                  formObject.useful_office,
                  formObject.pace,
                  formObject.comm,
                  formObject.syllabus,
                  formObject.note,
                  formObject.visuals,
                  formObject.hands,
                  formObject.group]);
  }
  