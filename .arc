@app
sing-4hk

@http
get /
delete /api/cats/:catID
get /todos
get /todos/:todoID
post /todos
patch /todos/:todoID
delete /todos/:todoID

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
