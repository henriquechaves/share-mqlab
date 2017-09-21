const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt
} = require('graphql')

// Arquivos de query
const UserType = require('./query')

//Bando de dados
const User = require('./user')

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    //Função para mudar o nome
    changeName: {
      type: UserType,
      args: {
        name: {
          name: 'name',
          type: GraphQLString
        }
      },
      resolve (root, {name}) {
        User.name = name
        return User.name
      }
    },

    passYear: {
      type: UserType,
      resolve () {
        User.years++
        return User.years
      }
    },

    toggleActive: {
      type: UserType,
      args: {
        active: {
          name: 'active',
          type: GraphQLBoolean
        }
      },
      resolve (root, {active}) {
        User.active = User.active ? false : true
        return User.active
      }
    }
  }
})
