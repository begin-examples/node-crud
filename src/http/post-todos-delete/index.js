let data = require('@begin/data')

exports.handler = async function destroy (req) {
  let id = req.body.id
  console.log(`DESTROY ${id}`)
  await data.destroy({
    table: 'todos',
    key: id
  })
  return {
    statusCode: 201,
    type: 'application/json; charset=utf8',
    body: JSON.stringify({
      ok: true
    })
  }
}
