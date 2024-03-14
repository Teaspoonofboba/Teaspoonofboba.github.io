//TOGGLE EMBEDS
function togglediv(id) {
    var div = document.getElementById(id);
    div.style.display = div.style.display == "none" ? "block" : "none";
}

$(".showbutton").on("click", function(e) {
    $(".form").hide(); 
    $("#" + $(this).data("id")).toggle('fast'); // or .toggle()
});