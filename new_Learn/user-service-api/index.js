const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json(
    [
      { 
        message: 'Hello World!' ,
        name: 'John Doe',
        age: 30,
        email: 'ekd@example.com'
    },
    { 
        message: 'Hello World!' ,
        name: "Jane Doe",
        age: 25,
        email: 'jane@example.com'
    }
    ]
)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
