function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$( document ).ready(function() {
  var name = getParameterByName('name');
  console.log(name);

  if (name) {
    $('.letter').show();
    $('.error').hide();

    $('.placeholder-name').append(name);
  } else {
    $('.letter').hide();
    $('.error').show();
  }
});