function() {
  var form = $(this);
  var fdoc = form.serializeObject();

  if(fdoc.message.length==0)
    return false;
    
  if($$("#profile").profile.active == "false"){
    $("#u_cant").evently({_init:{mustache:'<p>Sua conta ainda não esta ativada. Contate o administrador.</p>'}});
    return false;
  }
    
  fdoc.created_at = new Date();
  fdoc.profile = $$("#profile").profile;
  $$(this).app.db.saveDoc(fdoc, {
    success : function() {
      form[0].reset();
    }
  });
  return false;
};
