var createTweetUsingAjax = function (e) {
  var tweetToSend; // How do we get the new tweet to send?
  var params = {}; // What might need to be in this object?

  $.post('/tweets', params)
  .done(function (html) {
    alert('Got response: ' + html); // What do we need to do here?
  })
  .error(function (error) {
    alert('Got error:' + error.responseText); // And here?
  });
};

// Here is some set-up - remove the // to start working on AJAX!
$(function () {
  $('form#new_tweet').submit(function () {
    //createTweetUsingAjax();
    //e.preventDefault();
  });
});
