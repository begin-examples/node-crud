const data = require('@begin/data')

exports.handler = async function patch (req) {
  let todo = await data.set({
    table: 'todos',
    ...req.body
  })

  return {
    status: 201,
    type: 'application/json; charset=utf8',
    body: JSON.stringify({
      ok: true,
      todo
    })
  }
}
