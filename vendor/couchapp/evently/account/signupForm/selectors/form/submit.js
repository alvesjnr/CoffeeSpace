function(e) {

  if ($('input[name=password]', this).val() != $('input[name=password_again]', this).val()){
    //Alert for incorrect password
    $("#wrong_alert").evently({_init : {mustache : "<p>Retype correctly your password!</p>"}})
    return false;
  }
    
  var name = $('input[name=name]', this).val(),
    pass = $('input[name=password]', this).val();              
    $(this).trigger('doSignup', [name, pass]);
  return false;
}
