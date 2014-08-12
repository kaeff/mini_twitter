$(document).ready(function() {

  $('.actions').click(function(e) {
    e.preventDefault();
    var tweetToSend = $("#tweet_content").val();
    var params = {"tweet[content]": tweetToSend}
    $.post('/tweets', params)
        .done(function(tweet) {
          $('#tweets_timeline').append(tweet);
          $("#tweet_content").val(" ");
        })
        .fail(function() {
          alert( "error" );
        })
        .always(function() {
          alert( "complete" );
        });

  });

});



