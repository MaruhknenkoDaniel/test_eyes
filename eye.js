$('.header .top .navLink').click(function() {
  $('.nav').slideToggle();
});
$("select").change(function() {
  var text = $(this).find("option[value='" + $(this).val() + "']").attr("text");
  if (text)
    alert(text)
})
