function setCssForLTR()
{
	$('#comments, #message_header, #OriginalPost, .text_area, .message, .check_box_commentable, #preview_body').css({
		"direction": "ltr",
		"text-align": "left" });
}

function setCssForRTL()
{
	$('#comments, #message_header, #OriginalPost, .text_area, .message, .check_box_commentable, #preview_body').css({
		"direction": "rtl",
		"text-align": "right" });
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