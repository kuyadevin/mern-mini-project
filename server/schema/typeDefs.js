const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Matchup {
  tech1: [String]!
  tech2: [String]!
  tech1_votes: Number
  tech2_votes: Number
}

type Tech {
  name: [String]!
}

type Query {

}
`

module.exports = typeDefs;