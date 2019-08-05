@app
sing-4hk

@http
get /
get /todos
get /todos/:todoID
post /todos
patch /todos/:todoID
delete /todos/:todoID
get /about

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
