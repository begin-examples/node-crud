@app
sing-4hk

@http
get /
patch /api/cats/:catID
delete /api/cats/:catID
get /todos
get /todos/:todoID
post /todos
patch /todos/:todoID

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
