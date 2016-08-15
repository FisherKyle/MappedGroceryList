$(document).ready(function() {
  $("form#sorter").submit(function(event) {
    event.preventDefault();
    var groceryList = ["word1", "word2", "word3", "word4", "word5", "word6"];
    var organizedList = groceryList.map(function(groceryItem) {
      var newWords = $("#" + groceryItem).val();
      return newWords;
    });
    console.log(organizedList.sort());
  });
});
