const express = require('express')

// é um middleware que costumiza o sevidor HTTP do express para ter suporte ao estilo do GraphQL
const graphqlHTTP = require('express-graphql')
const schema = require('./model/schema')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  //Habilita o módulo de desenvovimento
  graphiql: true
}))

const server = app.listen(3000, () => console.log('Server running!'))
