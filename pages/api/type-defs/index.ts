import { gql } from 'apollo-server-core';

export default gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    signup(name: String, email: String, password: String): User
  }
`;
