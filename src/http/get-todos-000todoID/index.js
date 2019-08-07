let data = require('@begin/data')

exports.handler = async function todo (req) {
  let todo = await data.get({
    table: 'todos',
    key: req.params.todoID
  })
  return {
    body: JSON.stringify({
      ok: true,
      todo
    })
  }
}
