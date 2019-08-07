const arc = require('@architect/functions')
/*
  const data = require('@begin/data')

function getHTML (todos) {
  return `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Todos</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
    <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon" />
  </head>
  <body>
    <h1>
      Todos
    </h1>
    <ul>
      ${todos
        ? todos.map(t => `<li key="t.todoID">t.text</li>`)
        : 'Enter a todo.'
      }
    </ul>
  </body>
</html>
`
}

// HTTP function
exports.handler = async function http (req) {
  let todos = await data.get({
    table: 'todos'
  })
  console.log('TODOS: ', todos)
  let body = getHTML(todos)
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body
  }
}
*/

exports.handler = arc.proxy.public({ spa: true })
