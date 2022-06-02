const { Tech, Matchup } = require("../models")

const resolvers = {
  Query: {
    tech: async () => {
      return Tech.find({})
    },

    matchup: async () => {
      return Matchup.find({})
    },
  },

  Mutation: {
    createMatchup: async (parent, { body }) => {
      return Matchup.create({ body });
    },
    createVote: async(parent, {})
  }
}
