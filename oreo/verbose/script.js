$(function() {
	$("#close-tab").on("click", function() {
		$("[href=#tab-search]").closest("li").removeClass("active");
	});
	$("[href=#tab-search]").on("shown.bs.tab", function() {
		$("#tab-search").find("input").focus();
	})
});