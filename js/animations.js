$(document).ready(function() {

//clicking in tweet compose box
	$('.tweet-compose').on('click', function() {
		$(this).animate({height:"66px"});
		$('#tweet-controls').show();
	if (charRemaining === 140) {
		$('#tweet-submit').attr('disabled','disabled');
		};
	});

//typing in tweet compose box
		var composedTweet;
		var composedTweetLength;
		var maxCharacters = 140;
		var charRemaining = 140;

	$('.tweet-compose').on('keyup', function() {
		composedTweet = $(this).val();
		composedTweetLength = composedTweet.length;
		charRemaining = maxCharacters - composedTweetLength;		
		$('#char-count').text(charRemaining);

//change text color
		if (charRemaining <= 10) {
			$('#char-count').css('color', 'red');
		} else {
			$('#char-count').css('color', 'black');
		}

//enable button
		if (charRemaining < 0 || charRemaining === 140) {
			$('#tweet-submit').attr('disabled','disabled');
		} else {
			$('#tweet-submit').removeAttr('disabled');
		}
	});

//creating a tweet
	var newTweet;
	var newTweetText;
	var newUserName;
	var userNameNoSpaces;

	$('#tweet-submit').on('click', function() {		
		newTweet = $('.tweet:first').clone();
		newTweetText = $('.tweet-compose').val();
		newUserName = $('#profile-summary').text();
		userNameNoSpaces = newUserName.replace(/\s+/g, '');
//changing text
		newTweet.find('.tweet-text').text(newTweetText);
//changing image
		newTweet.find('.avatar').attr("src", "img/alagoon.jpg");
//changing username
		newTweet.find('.fullname').text(newUserName);
		newTweet.find('.username').text('@' + userNameNoSpaces);

		$('#stream').prepend(newTweet);
		$('.tweet-compose').val() = '';
	});

//showing and hiding tweet actions
	$('.tweet').on('mouseover', function() {
		$(this).find('.tweet-actions').css('visibility', 'visible');
	});

	$('.tweet').on('mouseleave', function() {
		$(this).find('.tweet-actions').css('visibility', 'hidden');
	});

//showing stats section
	$('.tweet').on('click', function() {
		$(this).find('.stats').toggle(1000);
	});
});
