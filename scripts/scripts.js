<script src="//load.sheetsu.com"></script>

  function successFunc(data) {
    console.log(data);
  }

  var students = "https://sheetsu.com/apis/v1.0su/00444c363d54";
  var professors = "https://sheetsu.com/apis/v1.0su/cc3ef25325e9";
  var inputcourse = document.getElementsByName("inputcourse")[0].value;
  // Get all rows where column 'score' is '42'
  var searchQuery = {
    course: inputcourse,
  };
  Sheetsu.read("https://sheetsu.com/apis/v1.0su/cc3ef25325e9", {
    search: searchQuery
  }, successFunc);
