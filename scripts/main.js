// Brings the main nav to all pages.
$(document).ready(function(){ 
  $.get("nav_index.html", function(data) {
    $("#nav-main").html(data);
  });
}); 