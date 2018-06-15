// Check off specific todos by clicking
$("li").click(function() {
	$(this).toggleClass("completed");
});

// Click on X to delete todo
$("span").click(function(event) {
	// Fade and remove entire li
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	// Stop click event from bubbling to parents
	event.stopPropagation();
})
