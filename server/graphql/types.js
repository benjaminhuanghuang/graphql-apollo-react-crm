export const typeDefs = `
  type Contact {
    id: ID!
    firstName: String
    lastName: String
  }

  type Query {
    contacts: [Contact]
  }

  type Mutation {
    addContact(firstName: String!, lastName: String!): Contact
  }
`;