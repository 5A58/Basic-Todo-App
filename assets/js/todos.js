// Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event) {
	// Fade and remove entire li
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	// Stop click event from bubbling to parents
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		// Get text for new todo from input
		let todoText = $(this).val();
		// Clear input text
		$(this).val("");
		// Create a new li and add to ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>")
	}
});
