function setQuote() {
  $.ajax({
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
    dataType: 'json',
    success: function(data) {
		var randomNumber = Math.floor(Math.random() * data.length);
		var quoteTitle = data[randomNumber].title;
		var quoteContent = data[randomNumber].content;
		$("#quote .content p").html(quoteContent);
		$("#quote .title").html("- " + quoteTitle);
		$(".twitter-share-button").click(function() {
			var tweetContent = $(quoteContent).text();
			$('.twitter-share-button').attr('href', 'http://www.twitter.com/intent/tweet?text=' + tweetContent + quoteTitle);
		});
    },
    cache: false
  });
}

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

function animate() {
  var randomColor = Math.floor(Math.random() * colors.length + 1);
  $("body, #quote_btn, .twitter-share-button").stop().animate({
    backgroundColor: colors[randomColor]
  }, 500);

  $(".fa-quote-left").stop().animate({
    color: colors[randomColor]
  }, 500);
}

$("#quote_btn").on('click', function() {
  setQuote();
  animate();
});

setQuote();
animate();