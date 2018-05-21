//Problem: An image link to an endpoint
//solution: An overlay of the image.
$(function(){
	//2. Create an overlay
	//contains the image & caption
	var $overlay = $("<div id='overlay'></div>");
	var $image = $("<img>");
	var $caption = $("<p></p>");
	//dislpays the  image linked.	
	$overlay.append($image);
	$overlay.append($caption);
	$("body").append($overlay);
	//1. When the user clicks an image
	$("#gallery a").click(function(e){
		e.preventDefault();
		//take the children's alt & set the caption	
		var imageLocation = $(this).attr("href");	
		$image.attr("src", imageLocation);
		//An overlay is shown	
		var captionText = $(this).children("img").attr("alt");
		$caption.text(captionText);
		$overlay.show();
	});
	
//3. when overlay is clicked
	$overlay.click(function(){
		$overlay.hide();
	})
	//hide the overlay
	
})

