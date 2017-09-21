const express = require('express')

// Driver pra funcionar com Express
const graphqlHTTP = require('express-graphql')
const schema = require('./model/schema')

const app = express()

// Roda única x endpoints
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const server = app.listen(3000, () => console.log('Server running!'))
