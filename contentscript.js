function setCssForLTR()
{
	$('#comments, #message_header, #OriginalPost, .text_area, .message, .check_box_commentable, #preview_body').css({
		"direction": "ltr",
		"text-align": "left" });
	$('div.formatted_text_body li, div.formatted_text_body ul, #preview_body li, #preview_body ul').css( { 
	"margin-left": "15px", 
	"padding-left": "3px", 
	"padding-right": "0px",
	"margin-right": "0" });
}

function setCssForRTL()
{
	$('#comments, #message_header, #OriginalPost, .text_area, .message, .check_box_commentable, #preview_body').css({
		"direction": "rtl",
		"text-align": "right" });
	$('div.formatted_text_body li, div.formatted_text_body ul, #preview_body li, #preview_body ul').css( { 
		"margin-right": "15px", 
		"padding-right": "3px", 
		"padding-left": "0px",
		"margin-left": "0" });
}
function toggleCssOfDirectioning(shouldBeLTR)
{
	if (shouldBeLTR == "yes") setCssForLTR();
	else setCssForRTL();
}

var port = chrome.extension.connect();
//port.postMessage();
port.onMessage.addListener(function(msg) {
  toggleCssOfDirectioning(msg.direction);
  });