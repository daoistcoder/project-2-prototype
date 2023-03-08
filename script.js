$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var word = $('input').val();
    var url = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/' + word;
    $.get(url, function(response) {
      var definitions = response[0].meanings[0].definitions;
      var html = '<ul>';
      for (var i = 0; i < 1; i++) {
        html += '<li>' + definitions[i].definition + '</li>';
      }
      html += '</ul>';
      $('section:last-of-type').html('<h2>' + word + '</h2>' + html);
    });
  });
});
console.log("Script loaded.");