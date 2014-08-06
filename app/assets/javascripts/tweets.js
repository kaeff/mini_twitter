//Place all the behaviors and hooks related to the matching controller here.
//All this logic will automatically be available in application.js.
//You can use CoffeeScript in this file: http://coffeescript.org/

$('form#new_tweet input[type="submit"').submit(function (e) {
  e.preventDefault();

  var params = {}; // What might need to be in this object?
  $.post('<%= create_tweet_path %>', params())
  .done(function (html) {
    alert('Got response: ' + html); // What do we need to do here?
  })
  .error(function (error) {
    alert(error); // And here?
  });
});
