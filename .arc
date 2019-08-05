@app
sing-4hk

@http
get /
get /api/cats/:catID
post /api/cats
patch /api/cats/:catID
delete /api/cats/:catID
get /todos

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
