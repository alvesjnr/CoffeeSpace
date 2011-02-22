function(doc) {
  if(doc['couch.app.profile'].active)
    emit(doc.name, doc['couch.app.profile'].active);
}

