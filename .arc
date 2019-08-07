@app
sing-4hk

@http
get /
get /todos
get /todos/:todoID
post /todos
patch /todos/:todoID
post /todos/:todoID/delete
post /todos/delete

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
