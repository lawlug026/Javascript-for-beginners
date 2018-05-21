//Problem: Look on mobile devices is terrific
//Solution: make the links in the select tag

//Hide the links for shorter width
//Make a select tag & append option
$select = $(`<select></select>`);
$("header").append($select);
$("header a").each(function(){
	$anchor = $(this);
	$option = $(`<option></option>`);
	$option.val($anchor.attr("href"));
	$option.text($anchor.text());
	$select.append($option);
	if($anchor.parent().hasClass("selected")){
		$option.prop("selected", true);
	}
});
	// value is href & text is text of links

$select.change(function(){
	window.location = $select.val();
});

//Make a button

//When user clicks a button, it will go to linked html
//make the selected link selected to the option clicked