let data = require('@begin/data')
let id = require('nanoid')

exports.handler = async function post (req) {
  let todo = req.body
  todo.id = id()
  await data.set({
    table: 'todos',
    todo
  })
  if (isXHR(req.headers)) {
    return {
      statusCode: 201
    }
  } else {
    return {
      statusCode: 302,
      location: '/'
    }
  }
}

function isXHR (headers) {
  if (!headers) {
    return false
  }

  if (headers['X-Requested-With']) {
    return headers['X-Requested-With'] === 'XMLHttpRequest'
  }

  if (headers['x-requested-with']) {
    return headers['x-requested-with'] === 'XMLHttpRequest'
  }

  return false
}
