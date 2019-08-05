@app
sing-4hk

@http
get /
post /api/cats
patch /api/cats/:catID
delete /api/cats/:catID
get /todos
get /todos/:todoID

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
