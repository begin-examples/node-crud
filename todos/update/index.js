let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function update(req) {
  console.log('UPDATE')
  let todo = arc.http.helpers.bodyParser(req)
  let key = req.pathParameters.id
  todo.completed = !!todo.completed
  await data.set({
    key,
    table: 'todos',
    ...todo
  })
  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
