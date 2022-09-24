const { gql } = require('apollo-server-express');

const typeDefs = gql `
  type User {
    _id: ID
    username: String
    email: String
  }

  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
  }

  type Story {
    _id: ID
    title: String
    subtitle: String
    name: String
    contents: [Content]
    createdAt: String
    posts: [Post]
  }

  type Content {
    id: Int
    type: String
    text: String
    url: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    stories: [Story]
    story(name: String!): Story
    user(username: String!): User
    posts(story: String!): [Post]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addStory(title: String!, subtitle: String, name: String!): Story
    addContent(storyId: ID!, id: Int!, type: String!, text: String!, url: String): Story
    addPost(storyId: ID!, username: String!, postText: String!): Post
    removeStory(storyId: ID!): Story
    removePost(postId: ID!): Post
    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;