@app
sing-4hk

@http
get /
get /todos
post /todos
post /todos/delete
get /ping

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
